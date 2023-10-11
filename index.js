const keyDisplay = document.getElementById('key-display');
const keycodeDisplay = document.getElementById('keycode-display');
const keyHistory = document.getElementById('key-history');
const historyLimit = 10;
let history = [];

// Function to update the key display
function updateKeyDisplay(event) {
    keyDisplay.textContent = `Pressed Key: ${event.key}`;
    keycodeDisplay.textContent = `Keycode: ${event.keyCode}`;

    // Add the key to history
    history.unshift(`Key: ${event.key}, Keycode: ${event.keyCode}`);
    if (history.length > historyLimit) {
        history.pop();
    }

    // Update the key history display
    keyHistory.textContent = `Key History: ${history.join(' | ')}`;
}

// Function to play a sound on keypress (you can replace the sound source)
function playKeyPressSound() {
    // Replace this with a sound file path
    const audio = new Audio('path/to/keypress-sound.mp3');
    audio.play();
}

// Event listener for keydown event
document.addEventListener('keydown', (event) => {
    updateKeyDisplay(event);
    playKeyPressSound();

    // Check for special key combinations
    if (event.ctrlKey && event.key === 'z') {
        keyHistory.textContent += ' | Ctrl + Z';
    } else if (event.ctrlKey && event.key === 'c') {
        keyHistory.textContent += ' | Ctrl + C';
    }
});