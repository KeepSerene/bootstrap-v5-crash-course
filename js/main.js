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

const contactFormEl = document.querySelector("[data-contact-form]");

function validateContactForm(event) {
  event.preventDefault();

  // Clear previous errors
  clearErrors();

  const emailFieldEl = contactFormEl.querySelector("#email");
  const nameFieldEl = contactFormEl.querySelector("#name");
  const queryFieldEl = contactFormEl.querySelector("#query");

  const emailFeedbackEl = contactFormEl.querySelector("[data-email-feedback]");
  const nameFeedbackEl = contactFormEl.querySelector("[data-name-feedback]");
  const queryFeedbackEl = contactFormEl.querySelector("[data-query-feedback]");

  let isValid = true;

  if (!emailFieldEl.value.trim()) {
    isValid = false;
    showErrMsg(emailFieldEl, emailFeedbackEl, "Email address is required");
  }

  if (!nameFieldEl.value.trim()) {
    isValid = false;
    showErrMsg(nameFieldEl, nameFeedbackEl, "Name is required!");
  } else if (nameFieldEl.value.trim().length < 3) {
    isValid = false;
    showErrMsg(
      nameFieldEl,
      nameFeedbackEl,
      "Name must be at least 3 characters long!"
    );
  }

  if (!queryFieldEl.value.trim()) {
    isValid = false;
    showErrMsg(queryFieldEl, queryFeedbackEl, "Please enter your query!");
  }

  // Submit and reset form
  if (isValid) {
    console.log("Email:", emailFieldEl.value.trim());
    console.log("Name:", nameFieldEl.value.trim());
    console.log("Query:", queryFieldEl.value.trim());
    alert("Form submitted successfully!");
    contactFormEl.reset();
  }
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
      "Please enter your email!"
    );
  }

  if (isValid) {
    console.log("Email:", newsletterEmailInputEl.value.trim());
    alert("Yay! You've subscribed to Ninja Monk monthly newsletter!");
    newsletterEmailInputEl.value = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initTooltips();
  contactFormEl.addEventListener("submit", validateContactForm);
  newsletterSubBtn.addEventListener("click", validateNewsletterSub);
});
