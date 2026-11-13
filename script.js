(() => {
  const cfg = window.LOANSAATHI_CONFIG || {};
  const menu = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (menu && nav) menu.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(opened));
  });
  document.querySelectorAll('[data-service]').forEach(link => link.addEventListener("click", () => {
    const select = document.getElementById("serviceSelect");
    if (select) select.value = link.getAttribute("data-service");
  }));
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("enquiryForm");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const error = document.getElementById("formError");
    error.textContent = "";
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const city = String(data.get("city") || "").trim();
    const service = String(data.get("service") || "").trim();
    const details = String(data.get("details") || "").trim();
    if (!/^[6-9][0-9]{9}$/.test(phone)) {
      error.textContent = "कृपया सही 10-digit mobile number दर्ज करें।";
      return;
    }
    if (!data.get("consent")) {
      error.textContent = "आगे बढ़ने के लिए consent जरूरी है।";
      return;
    }
    const number = String(cfg.whatsappNumber || "").replace(/\D/g, "");
    if (!number || number.endsWith("XXXXXXXXXX") || number.length < 10) {
      error.textContent = "Business WhatsApp number अभी सेट नहीं हुआ है। config.js में अपना अलग business number जोड़ें।";
      return;
    }
    const message = [
      "New Enquiry - LoanSaathi",
      `Name: ${name}`,
      `Mobile: ${phone}`,
      `City/District: ${city || "Not provided"}`,
      `Service: ${service}`,
      `Details: ${details || "Not provided"}`,
      "Consent: Customer agreed to be contacted about this enquiry."
    ].join("\n");
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
})();