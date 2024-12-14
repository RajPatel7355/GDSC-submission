document.addEventListener("DOMContentLoaded", () => {
    // Countdown Timer Script
    function updateCountdown() {
        const countdownElement = document.getElementById('countdown');
        const happyNewYearElement = document.getElementById('happy-new-year');

        const newYear = new Date('January 1, 2025 00:00:00').getTime();
        const now = new Date().getTime();
        const timeLeft = newYear - now;

        if (timeLeft <= 0) {
            countdownElement.style.display = 'none'; // Hide the countdown
            happyNewYearElement.classList.remove('hidden'); // Show "Happy New Year!"
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `Time remaining until New Year: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    // Preview Button Event Listener
    const previewBtn = document.getElementById("preview-btn");
    const happyNewYearElement = document.getElementById("happy-new-year");

    previewBtn.addEventListener("click", () => {
        // Trigger Happy New Year message
        happyNewYearElement.classList.remove("hidden");

        // Trigger confetti animation
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { x: 0.5, y: 0.5 }
        });

        // Optionally, you can add more celebration effects (like flowers) here
    });
});
