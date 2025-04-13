// Initialize all bootstrap tooltips
function initTooltips() {
  const tooltipEls = document.querySelectorAll("[data-custom-tooltip]");
  tooltipEls.forEach((tooltipEl) => {
    new bootstrap.Tooltip(tooltipEl);
  });
}

// Validate form submissions
const showErrMsg = (formFieldEl, feedbackEl, msg) => {
  // For styling the form field
  formFieldEl.focus();
  formFieldEl.classList.add("invalid");

  feedbackEl.style.display = "block";
  feedbackEl.innerText = msg;
};

const clearErrors = () => {
  // Remove styles from the form fields
  document.querySelectorAll(".invalid").forEach((elem) => {
    elem.classList.remove("invalid");
  });

  // Clear error messages
  document.querySelectorAll(".invalid-feedback").forEach((elem) => {
    elem.innerText = "";
    elem.style.display = "none";
  });
};

const formEls = document.querySelectorAll(".needs-validation");

function validateContactForm() {
  Array.prototype.slice.call(formEls).forEach((formEl) => {
    formEl.addEventListener("submit", (event) => {
      // If the form isn't valid, prevent submission
      if (!formEl.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        alert("Form submitted successfully!");
      }

      formEl.classList.add("was-validated");
    });
  });
}

const newsletterSubBtn = document.querySelector("[data-newsletter-sub-btn]");

function validateNewsletterSub() {
  const newsletterEmailInputEl = document.getElementById("modal-email");
  const emailFeedbackEl = document.querySelector("[data-modal-email-feedback]");

  // Clear previous error
  clearErrors();

  let isValid = true;

  if (!newsletterEmailInputEl.value.trim()) {
    isValid = false;
    showErrMsg(
      newsletterEmailInputEl,
      emailFeedbackEl,
      "Please enter your email address!"
    );
  }

  if (isValid) {
    console.log("Email:", newsletterEmailInputEl.value.trim());
    alert("Yay! You've subscribed to Ninja Monk monthly newsletter!");
    newsletterEmailInputEl.value = "";
  }
}

function renderCopyrightYear() {
  const copyrightYearSpanEl = document.querySelector("[data-copyright-year]");
  copyrightYearSpanEl.innerText = `${new Date().getFullYear()}`;
}

document.addEventListener("DOMContentLoaded", () => {
  initTooltips();
  validateContactForm();
  newsletterSubBtn.addEventListener("click", validateNewsletterSub);
  renderCopyrightYear();
});
