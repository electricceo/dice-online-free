document.getElementById('rollButton').addEventListener('click', function() {
    const diceType = document.getElementById('diceType').value;
    const diceResult = document.getElementById('diceResult');

    // Add rolling animation class
    diceResult.classList.add('roll');

    // Generate a random number based on the selected dice type
    setTimeout(() => {
        const result = Math.floor(Math.random() * diceType) + 1;
        diceResult.textContent = result;

        // Remove rolling animation class after animation is complete
        diceResult.classList.remove('roll');
    }, 500); // Duration of the animation
});