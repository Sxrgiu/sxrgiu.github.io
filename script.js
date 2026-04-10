// Payment Link Routing Logic
const tierCards = document.querySelectorAll('.sleek-btn');

tierCards.forEach(card => {
    card.addEventListener('click', (e) => {
        const btnElement = card.querySelector('.action-btn');
        const paymentLink = card.getAttribute('data-link');

        // Premium Loading UI
        btnElement.innerText = "Redirecting securely...";
        card.style.opacity = "0.7";
        card.style.pointerEvents = "none";

        if (!paymentLink || paymentLink.includes('REPLACE_WITH')) {
            alert('Setup Required: Please add the final Stripe Payment Link to this button in index.html');
            btnElement.innerText = "Why not";
            card.style.opacity = "1";
            card.style.pointerEvents = "auto";
            return;
        }

        // Direct secure tunnel straight to Stripe servers
        window.location.href = paymentLink;
    });
});

// Live Proof Notification Activity Logic
const toastElement = document.getElementById('live-toast');
const toastMessage = document.getElementById('toast-message');

const toastOptions = [
    "Someone just supported",
    "New supporter joined",
    "Someone chose to support"
];

function showRandomToast() {
    // Pick random message
    const randMsg = toastOptions[Math.floor(Math.random() * toastOptions.length)];
    toastMessage.innerText = randMsg;

    // Slide it in
    toastElement.classList.remove('hidden');

    // Hide it again after 4 seconds
    setTimeout(() => {
        toastElement.classList.add('hidden');
    }, 4000);
}

// Randomly trigger toast every 10 to 25 seconds
function scheduleNextToast() {
    const delay = Math.floor(Math.random() * (25000 - 10000 + 1) + 10000);
    setTimeout(() => {
        showRandomToast();
        scheduleNextToast();
    }, delay);
}

// Start toast loop after initial pause
setTimeout(scheduleNextToast, 5000);

// Check if returned from successful checkout
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success')) {
        alert("Payment successful. Thank you for being a part of this.");
    }
});

// Global Language Swapper
window.doGTranslate = function (lang) {
    let combo = document.querySelector('.goog-te-combo');
    if (!combo) return;
    combo.value = lang;
    combo.dispatchEvent(new Event('change'));
};
