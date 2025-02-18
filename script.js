let currentPage = 1; // Start with the first page
const totalPages = 7; // Total number of pages

// Function to navigate to the next page
function nextPage() {
    const currentSection = document.getElementById(`page${currentPage}`);
    const nextSection = document.getElementById(`page${(currentPage % totalPages) + 1}`);

    // Remove the active class from the current section
    currentSection.classList.remove("active");

    // Stop the audio of the current page
    stopAudio(currentPage);

    // Add the active class to the next section
    nextSection.classList.add("active");

    // Update the current page number
    currentPage = (currentPage % totalPages) + 1;
}

// Function to toggle music playback
function toggleMusic(pageNumber) {
    const audio = document.getElementById(`audio${pageNumber}`);
    const button = document.getElementById(`playButton${pageNumber}`);

    // Pause all other audio tracks
    for (let i = 1; i <= totalPages; i++) {
        if (i !== pageNumber) {
            stopAudio(i);
        }
    }

    // Toggle the audio for the current page
    if (audio.paused) {
        audio.play();
        button.textContent = "⏸️ Pause";
    } else {
        audio.pause();
        button.textContent = "▶️ Play";
    }
}

// Function to stop audio
function stopAudio(pageNumber) {
    const audio = document.getElementById(`audio${pageNumber}`);
    const button = document.getElementById(`playButton${pageNumber}`);

    if (audio) {
        audio.pause();
        audio.currentTime = 0; // Reset audio
        button.textContent = "▶️ Play";
    }
}

// Initialize: Display only the first page
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= totalPages; i++) {
        const section = document.getElementById(`page${i}`);
        if (i === 1) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    }
});
