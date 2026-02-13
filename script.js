/**
 * VALENTINE WEBSITE - INTERACTIVE JAVASCRIPT
 * Handles screen transitions, validation, and user interactions
 */

// ============================================
// SCREEN MANAGEMENT
// ============================================

/**
 * Show a specific screen by ID
 * @param {number} screenNumber - The screen number to display (1-5)
 */
function showScreen(screenNumber) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('fade-out');
    });

    // Show the target screen after a brief delay for smooth transition
    setTimeout(() => {
        screens.forEach(screen => {
            screen.classList.remove('fade-out');
        });
        
        const targetScreen = document.getElementById(`screen${screenNumber}`);
        if (targetScreen) {
            targetScreen.classList.add('active');
            
            // Special handling for screen 2 (auto-transition after 1.5s)
            if (screenNumber === 2) {
                setTimeout(() => {
                    showScreen(3);
                }, 1500);
            }
        }
    }, 400);
}

// ============================================
// SCREEN 1: UNLOCK VALIDATION
// ============================================

/**
 * Initialize the unlock screen functionality
 */
function initUnlockScreen() {
    const answerInput = document.getElementById('answerInput');
    const unlockBtn = document.getElementById('unlockBtn');
    const hint = document.getElementById('hint');
    
    // Handle Enter key press
    answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            validateAnswer();
        }
    });
    
    // Handle button click
    unlockBtn.addEventListener('click', validateAnswer);
    
    /**
     * Validate the user's answer
     */
    function validateAnswer() {
        const userAnswer = answerInput.value.trim();
        const correctAnswer = '3';
        
        // Clear previous hints
        hint.classList.add('hidden');
        hint.classList.remove('error', 'success');
        
        // Check if answer is empty
        if (!userAnswer) {
            showHint('Please enter an answer', 'error');
            return;
        }
        
        // Check if answer is correct
        if (userAnswer === correctAnswer) {
            showHint('Correct! Unlocking...', 'success');
            
            // Disable input and button during transition
            answerInput.disabled = true;
            unlockBtn.disabled = true;
            
            // Smooth transition to screen 2
            setTimeout(() => {
                showScreen(2);
            }, 800);
        } else {
            // Show helpful hint for wrong answer
            showHint('Not quite right. Try again! 💭', 'error');
            answerInput.focus();
            answerInput.select();
        }
    }
    
    /**
     * Display inline hint message
     * @param {string} message - The hint message to display
     * @param {string} type - The type of hint ('error' or 'success')
     */
    function showHint(message, type) {
        hint.textContent = message;
        hint.classList.remove('hidden');
        hint.classList.add(type);
        
        // Auto-hide success messages after a delay
        if (type === 'success') {
            setTimeout(() => {
                hint.classList.add('hidden');
            }, 2000);
        }
    }
}

// ============================================
// SCREEN 4: AUDIO PLAYER
// ============================================

/**
 * Initialize the audio player functionality
 */
function initAudioPlayer() {
    const audio = document.getElementById('valentineAudio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = playPauseBtn.querySelector('.play-icon');
    const pauseIcon = playPauseBtn.querySelector('.pause-icon');
    const progressBar = document.getElementById('progress');
    
    // Toggle play/pause
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        } else {
            audio.pause();
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }
    });
    
    // Update progress bar as audio plays
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progress + '%';
    });
    
    // Reset to play icon when audio ends
    audio.addEventListener('ended', () => {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        progressBar.style.width = '0%';
    });
    
    // Handle audio loading errors gracefully
    audio.addEventListener('error', () => {
        console.log('Audio file not found. Please add your audio file to audio/valentine-song.mp3');
        // Show a friendly message if audio fails to load
        const audioInfo = document.querySelector('.audio-info');
        if (audioInfo) {
            const errorMsg = document.createElement('div');
            errorMsg.textContent = '🎵 Add your special song to audio/valentine-song.mp3';
            errorMsg.style.cssText = 'font-size: 12px; color: var(--text-muted); margin-top: 8px;';
            audioInfo.appendChild(errorMsg);
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all functionality when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize unlock screen
    initUnlockScreen();
    
    // Initialize audio player controls
    initAudioPlayer();
    
    // Load assets from config
    loadMemoryPhotos();
    loadAudioPlayer();
    loadGifAnimations();
    loadScatteredPhotos();
    
    // Add subtle animation to memory items on hover
    const memoryItems = document.querySelectorAll('.memory-item');
    memoryItems.forEach((item, index) => {
        // Stagger animation delays for visual interest
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Ensure screen 1 is visible on load
    showScreen(1);
    
    // Initialize GIF animations for screen 1
    setTimeout(() => {
        initGifAnimation(1);
    }, 500);
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});

/**
 * Prevent form submission on Enter key in input fields
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        e.preventDefault();
    }
});

// ============================================
// ASSET CONFIGURATION
// ============================================

/**
 * ASSET CONFIGURATION
 * 
 * Update these arrays with your actual file names from the /assets folders.
 * The website will automatically load and use these files.
 * 
 * IMPORTANT: 
 * - List files in the order you want them to appear
 * - Use relative paths from the project root
 * - File names are case-sensitive
 * - If a file is missing, the site will fail gracefully (show placeholder or hide element)
 */

// Photos: List all image files from /assets/photos
// First 8 images will be used in the heart-shaped "Our Moments 💞" layout
const PHOTOS = [
    "assets/photos/pic1.jpeg",
    "assets/photos/pic2.jpeg",
    "assets/photos/pic3.jpeg",
    "assets/photos/pic4.jpeg",
    "assets/photos/pic5.jpeg",
    "assets/photos/pic6.jpeg",
    "assets/photos/pic7.jpeg",
    "assets/photos/pic11.jpeg",
    "assets/photos/pic8.jpeg",
    "assets/photos/pic9.jpeg",
    "assets/photos/pic10.jpeg"
    // First 8 photos will be used in the heart layout (extras beyond 8 will be ignored)
];

// Music: Single audio file from /assets/music
// This file will be used as the audio source for the music player
const MUSIC = "assets/music/love.mp3";
// Note: No music file found - add your audio file to assets/music/ and update this path

// GIFs: List all GIF files from /assets/gifs
// GIFs will be distributed across screens and played sequentially
const GIFS = [
    "assets/gifs/love.gif",
    "assets/gifs/good-morning-beautiful.gif",
    "assets/gifs/bubu-dudu-bubu-dudu-love.gif",
    "assets/gifs/cat-love.gif",
    "assets/gifs/love-poke.gif",
    "assets/gifs/milk-and-mocha.gif",
    "assets/gifs/amoureux.gif",
    "assets/gifs/cute-cartoon.gif",
    "assets/gifs/peach-goma-peach-and-goma.gif",
    "assets/gifs/kiss-me.gif",
    "assets/gifs/tkthao219-bubududu.gif"
    // All 11 GIFs will be distributed across all 5 screens automatically
];

// ============================================
// ASSET LOADING FUNCTIONS
// ============================================

/**
 * Load photos from config and display in heart layout
 * Uses first 8 photos from PHOTOS array
 */
function loadMemoryPhotos() {
    const memoryItems = document.querySelectorAll('.memory-item');
    const photosToUse = PHOTOS.slice(0, 8); // Use first 8 photos

    memoryItems.forEach((item, index) => {
        const placeholder = item.querySelector('.memory-placeholder');
        
        if (photosToUse[index]) {
            // Remove placeholder if exists
            if (placeholder) {
                placeholder.remove();
            }
            
            // Add or update image
            let img = item.querySelector('img');
            if (!img) {
                img = document.createElement('img');
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                item.appendChild(img);
            }
            
            img.src = photosToUse[index];
            img.onerror = function() {
                // If image fails to load, show placeholder gracefully
                this.style.display = 'none';
                if (!item.querySelector('.memory-placeholder')) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'memory-placeholder';
                    placeholder.textContent = '📸';
                    item.appendChild(placeholder);
                }
            };
        } else {
            // No photo available - keep or show placeholder
            if (!placeholder) {
                const placeholder = document.createElement('div');
                placeholder.className = 'memory-placeholder';
                placeholder.textContent = '📸';
                item.appendChild(placeholder);
            }
            placeholder.style.display = 'flex';
        }
    });
}

/**
 * Load music from config and set as audio source
 * Uses MUSIC config string
 */
function loadAudioPlayer() {
    const audio = document.getElementById('valentineAudio');
    
    if (MUSIC) {
        audio.src = MUSIC;
        audio.load();
        
        // Update audio title
        const audioTitle = document.querySelector('.audio-title');
        if (audioTitle) {
            const fileName = MUSIC.split('/').pop().replace(/\.[^/.]+$/, '');
            audioTitle.textContent = fileName || 'Our Special Song';
        }
    }
    
    // Handle missing file gracefully
    audio.onerror = function() {
        console.log('Audio file not found. Please add your music file to:', MUSIC);
        const audioTitle = document.querySelector('.audio-title');
        if (audioTitle) {
            audioTitle.textContent = '🎵 Add your song to assets/music/';
        }
    };
}

/**
 * Load GIFs from config and distribute across screens
 * GIFs cycle sequentially on each screen
 */
function loadGifAnimations() {
    // Distribute GIFs across screens (round-robin)
    const gifsByScreen = { 1: [], 2: [], 3: [], 4: [], 5: [] };
    
    GIFS.forEach((gifPath, index) => {
        const screenNum = (index % 5) + 1;
        gifsByScreen[screenNum].push(gifPath);
    });

    // Create and inject GIF elements for each screen
    for (let screenNum = 1; screenNum <= 5; screenNum++) {
        const container = document.querySelector(`.gif-container[data-screen="${screenNum}"]`);
        if (!container) continue;

        // Clear existing GIFs
        container.innerHTML = '';

        // Create GIF elements
        const gifs = gifsByScreen[screenNum];
        gifs.forEach((gifPath, index) => {
            const img = document.createElement('img');
            img.src = gifPath;
            img.className = 'gif-item';
            img.setAttribute('data-index', index);
            img.alt = '';
            img.onerror = function() {
                this.style.display = 'none';
            };
            container.appendChild(img);
        });

        // Initialize animation if screen is active
        const screen = document.getElementById(`screen${screenNum}`);
        if (screen && screen.classList.contains('active')) {
            setTimeout(() => {
                initGifAnimation(screenNum);
            }, 100);
        }
    }
}

/**
 * Load photos and scatter them randomly on the final page
 * Creates a beautiful memory collage effect
 */
function loadScatteredPhotos() {
    const container = document.getElementById('scatteredPhotos');
    if (!container) return;

    // Use 4-5 random photos from the PHOTOS array (less cluttered)
    const numPhotos = Math.min(5, PHOTOS.length);
    const shuffledPhotos = [...PHOTOS].sort(() => Math.random() - 0.5).slice(0, numPhotos);

    shuffledPhotos.forEach((photoPath, index) => {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'scattered-photo';
        
        const img = document.createElement('img');
        img.src = photoPath;
        img.alt = 'Memory';
        img.onerror = function() {
            photoDiv.style.display = 'none';
        };
        
        photoDiv.appendChild(img);
        
        // Random position (avoid center area where text is, better spacing)
        const positions = [
            { top: '5%', left: '3%', rotation: -20 },
            { top: '8%', right: '5%', rotation: 18 },
            { top: '75%', left: '2%', rotation: -12 },
            { top: '78%', right: '4%', rotation: 22 },
            { bottom: '10%', left: '12%', rotation: -25 },
            { bottom: '15%', right: '15%', rotation: 15 },
            { top: '50%', left: '2%', rotation: -16 },
            { top: '55%', right: '3%', rotation: 19 },
        ];
        
        const position = positions[index % positions.length];
        
        // Apply random position
        Object.keys(position).forEach(key => {
            if (key !== 'rotation') {
                photoDiv.style[key] = position[key];
            }
        });
        
        // Apply random rotation
        const rotation = position.rotation || (Math.random() * 30 - 15);
        photoDiv.style.setProperty('--photo-rotation', `${rotation}deg`);
        photoDiv.style.transform = `rotate(${rotation}deg)`;
        
        // Stagger animation delay for beautiful entrance
        photoDiv.style.animationDelay = `${index * 0.15}s`;
        
        container.appendChild(photoDiv);
    });
}

// ============================================
// SEQUENTIAL GIF ANIMATIONS
// ============================================

/**
 * GIF animation timers for each screen
 */
const gifTimers = {};

/**
 * Initialize sequential GIF animations for a screen
 * @param {number} screenNumber - The screen number to initialize GIFs for
 */
function initGifAnimation(screenNumber) {
    // Clear any existing timer for this screen
    if (gifTimers[screenNumber]) {
        clearInterval(gifTimers[screenNumber]);
    }

    const container = document.querySelector(`.gif-container[data-screen="${screenNumber}"]`);
    if (!container) return;

    const gifs = Array.from(container.querySelectorAll('.gif-item')).filter(gif => {
        return gif.style.display !== 'none' && gif.src;
    });
    if (gifs.length === 0) return;

    // Hide all GIFs initially
    gifs.forEach(gif => {
        gif.classList.remove('active');
        gif.classList.add('hidden');
    });

    let currentIndex = 0;
    const gifCount = gifs.length;
    const displayDuration = 2000; // 2 seconds per GIF
    const fadeDuration = 800; // 0.8 seconds fade

    /**
     * Show next GIF in sequence
     */
    function showNextGif() {
        // Hide current GIF
        if (gifs[currentIndex]) {
            gifs[currentIndex].classList.remove('active');
            gifs[currentIndex].classList.add('hidden');
        }

        // Move to next GIF
        currentIndex = (currentIndex + 1) % gifCount;

        // Show next GIF
        setTimeout(() => {
            if (gifs[currentIndex]) {
                gifs[currentIndex].classList.remove('hidden');
                gifs[currentIndex].classList.add('active');
            }
        }, fadeDuration / 2);
    }

    // Show first GIF immediately
    if (gifs[0]) {
        gifs[0].classList.remove('hidden');
        gifs[0].classList.add('active');
    }

    // Set up interval to cycle through GIFs
    gifTimers[screenNumber] = setInterval(() => {
        showNextGif();
    }, displayDuration);
}

/**
 * Stop GIF animations for a screen
 * @param {number} screenNumber - The screen number to stop GIFs for
 */
function stopGifAnimation(screenNumber) {
    if (gifTimers[screenNumber]) {
        clearInterval(gifTimers[screenNumber]);
        delete gifTimers[screenNumber];
    }

    const container = document.querySelector(`.gif-container[data-screen="${screenNumber}"]`);
    if (container) {
        const gifs = container.querySelectorAll('.gif-item');
        gifs.forEach(gif => {
            gif.classList.remove('active');
            gif.classList.add('hidden');
        });
    }
}

/**
 * Enhanced showScreen function to handle GIF animations
 */
const originalShowScreen = showScreen;
showScreen = function(screenNumber) {
    // Stop all GIF animations
    if (typeof gifTimers !== 'undefined') {
        Object.keys(gifTimers).forEach(screen => {
            if (typeof stopGifAnimation !== 'undefined') {
                stopGifAnimation(parseInt(screen));
            }
        });
    }

    // Call original showScreen
    originalShowScreen(screenNumber);

    // Initialize GIFs for the new screen after transition
    setTimeout(() => {
        if (typeof initGifAnimation !== 'undefined') {
            initGifAnimation(screenNumber);
        }
    }, 500);
};
