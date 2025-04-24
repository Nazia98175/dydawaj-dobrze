// replys js 
document.querySelectorAll(".toggle-replies").forEach((btn) => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const replies = document.getElementById(`replies-${id}`);
        replies.classList.toggle("hidden");
    });
});

//   form js 
const captchaCheckbox = document.getElementById("captcha");
const captchaCheck = document.getElementById("captchaCheck");
const captchaSpinner = document.getElementById("captchaSpinner");
const captchaConfirm = document.getElementById("captchaConfirm");
const submitBtn = document.getElementById("submitBtn");
const btnText = document.getElementById("btnText");
const btnLoader = document.getElementById("btnLoader");

// Toggle spinner when checkbox is checked
captchaCheckbox.addEventListener("change", () => {
    if (captchaCheckbox.checked) {
        captchaSpinner.classList.remove("hidden");
        captchaConfirm.classList.add("hidden");
        captchaSpinner.classList.add("animate-spin");

        // Simulate loading (1.5s)
        setTimeout(() => {
            captchaSpinner.classList.add("hidden");
            captchaConfirm.classList.remove("hidden");
        }, 1500);
    } else {
        captchaSpinner.classList.add("hidden");
        captchaConfirm.classList.add("hidden");
        captchaSpinner.classList.remove("animate-spin");
    }
});

submitBtn.addEventListener("click", () => {
    const isChecked = captchaCheckbox.checked;
    const comment = document.getElementById("comment").value.trim();
    const nickname = document.getElementById("nickname").value.trim();

    // if (!isChecked) {
    //   alert("Proszę potwierdzić, że nie jesteś robotem!");
    //   return;
    // }

    // if (!comment || !nickname) {
    //   alert("Wypełnij wszystkie pola!");
    //   return;
    // }

    // Show button loader
    btnLoader.classList.remove("hidden");

    setTimeout(() => {
        btnLoader.classList.add("hidden");
    }, 1500);
});


// modal js 
document.addEventListener("DOMContentLoaded", () => {
    // Changed from openModalButton to openModalBtn
    const openButtons = document.querySelectorAll(".openModalBtn");
    const modal = document.querySelector(".modalOverlay");

    // Open modal functionality
    openButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (modal) {
                modal.classList.add("active");
                document.body.classList.add("modal-open");
            }
        });
    });

    // Close modal functionality
    const closeBtn = modal.querySelector(".closeButton");

    // Close on close button
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
            document.body.classList.remove("modal-open");
        });
    }

    // Close when clicking outside modal content
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("active");
            document.body.classList.remove("modal-open");
        }
    });

    // Copy discount code functionality
    const copyButton = document.getElementById("copyButton");
    if (copyButton) {
        copyButton.addEventListener("click", function () {
            const discountCode = document.getElementById("discountCode");
            discountCode.select();
            document.execCommand("copy");

            // Show feedback
            this.textContent = "Skopiowano!";
            setTimeout(() => {
                this.textContent = "Skopiuj kod";
            }, 2000);
        });
    }

    // Go to store functionality
    const goToStoreButton = document.getElementById("goToStore");
    if (goToStoreButton) {
        goToStoreButton.addEventListener("click", function () {
            window.location.href = "#"; // Would be the store URL in a real implementation
            modal.classList.remove("active");
            document.body.classList.remove("modal-open");
        });
    }

    // Add event listener for ESC key to close modal
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.classList.remove("active");
            document.body.classList.remove("modal-open");
        }
    });
});