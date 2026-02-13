# Valentine's Day Interactive Website 💝

A complete, mobile-first interactive Valentine website built with HTML, CSS, and vanilla JavaScript.

## Features

- ✨ **5 Interactive Screens** with smooth transitions
- 💕 **Floating Heart Animations** in the background
- 🎨 **Romantic Design** with burgundy/pink color palette
- 📱 **Fully Responsive** - mobile-first approach
- 🎵 **Audio Player** for your special song
- 📸 **Photo Collage** with heart-shaped layout
- 🎯 **Interactive Unlock** with validation

## Quick Start

1. Open `index.html` in your web browser
2. That's it! No build process needed.

## 📋 Requirements

**Where to Upload Files:**
All files must be placed in the `assets/` folder structure:
- `assets/photos/` - Upload your photos here
- `assets/music/` - Upload your music file here  
- `assets/gifs/` - Upload your GIFs here (optional)

**What You Need:**
- **📸 Photos**: **Minimum 8 photos** (recommended: 10+)
  - First 8 photos are used in the heart-shaped layout (Screen 3)
  - 4-5 random photos are used as scattered memory photos (Screen 5)
- **🎵 Music**: **1 music file** (required)
  - Used in the audio player (Screen 4)
- **🎬 GIFs**: Optional (recommended: 5-15)
  - Distributed across all 5 screens automatically

After uploading files, update the config arrays in `script.js` (see "Adding Your Assets" section below).

## Customization

### Adding Your Assets

The website uses a clean, manual asset structure. Simply place your files in the `/assets` folders and update the config arrays in `script.js`.

**📁 Where to Upload Files:**

All media files must be placed in the following folder structure:
```
assets/
├── photos/     ← Upload your photos here
├── music/       ← Upload your music file here
└── gifs/        ← Upload your GIFs here (optional)
```

**Step 1: Add Files to Folders**

#### 📸 Photos (Required: Minimum 8 photos)
**Location:** `assets/photos/`

**Requirements:**
- **Minimum 8 photos** are required for the heart-shaped memory layout (Screen 3)
- **Recommended: 10+ photos** for better variety in scattered photos (Screen 5)
- First 8 photos will be used in the heart-shaped "Our Moments 💞" layout
- 4-5 random photos will be used as scattered memory photos on the final page
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
- File names can be anything (e.g., `pic1.jpg`, `memory1.png`, `photo1.jpeg`, etc.)

**How photos are used:**
- **Screen 3 (Heart Layout)**: Uses first 8 photos from your `PHOTOS` array
- **Screen 5 (Scattered Photos)**: Randomly selects 4-5 photos from your `PHOTOS` array

#### 🎵 Music (Required: 1 file)
**Location:** `assets/music/`

**Requirements:**
- **Exactly 1 music file** is required
- MP3 format recommended for best browser compatibility
- File name can be anything (e.g., `love.mp3`, `our-song.mp3`, `valentine.mp3`, etc.)
- Used in the audio player on Screen 4 ("Our Song 🎧")

#### 🎬 GIFs (Optional but Recommended)
**Location:** `assets/gifs/`

**Requirements:**
- GIFs are optional - the site works without them
- Recommended: 5-15 GIFs for variety across all screens
- GIFs will be automatically distributed across all 5 screens
- Each screen will cycle through its assigned GIFs sequentially
- File names can be anything (e.g., `love.gif`, `romantic.gif`, `heart1.gif`, etc.)

**Step 2: Update Config Arrays**

Open `script.js` and update the asset configuration arrays (around line 240):

```javascript
// Photos: List all your photo file names here
// First 8 photos will be used in the heart layout (Screen 3)
// 4-5 random photos will be used as scattered photos (Screen 5)
const PHOTOS = [
    "assets/photos/pic1.jpeg",
    "assets/photos/pic2.jpeg",
    "assets/photos/pic3.jpeg",
    "assets/photos/pic4.jpeg",
    "assets/photos/pic5.jpeg",
    "assets/photos/pic6.jpeg",
    "assets/photos/pic7.jpeg",
    "assets/photos/pic8.jpeg",
    // Add more photos here for variety in scattered photos
];

// Music: Single audio file path (required)
const MUSIC = "assets/music/love.mp3";

// GIFs: List all your GIF files here (optional)
// GIFs will be distributed across all 5 screens automatically
const GIFS = [
    "assets/gifs/love.gif",
    "assets/gifs/romantic.gif",
    // Add more GIFs here
];
```

**Important Notes:**
- **Photos**: 
  - Minimum 8 photos required (for heart layout)
  - First 8 photos are used in the heart-shaped "Our Moments 💞" layout (Screen 3)
  - 4-5 random photos are used as scattered memory photos on the final page (Screen 5)
  - If fewer than 8 photos exist, remaining slots show placeholders (📸)
- **Music**: 
  - Exactly 1 music file required
  - Update the `MUSIC` path to match your file name
- **GIFs**: 
  - Optional but recommended
  - Will be automatically distributed across all 5 screens
  - Each screen cycles through its assigned GIFs sequentially

**GIF Requirements:**
- Small file size (optimized for mobile)
- 2-4 GIFs per screen
- Each GIF displays for ~2 seconds
- GIFs fade in/out sequentially (one at a time)
- Recommended: Romantic, subtle animations

### How Assets Are Loaded

- **Photos**: 
  - Automatically loads first 8 images from `PHOTOS` array into the heart-shaped layout (Screen 3)
  - Randomly selects 4-5 photos from `PHOTOS` array for scattered memory photos (Screen 5)
- **Music**: Automatically loads file from `MUSIC` config into the audio player (Screen 4)
- **GIFs**: Automatically distributes all GIFs from `GIFS` array across all 5 screens and cycles them sequentially

**Graceful Failure:**
- Missing photos: Shows placeholder (📸) instead
- Missing music: Shows message in audio player, no broken UI
- Missing GIFs: GIF containers remain empty, no errors

The website will work even if some assets are missing - it fails gracefully without breaking the UI.

### Customizing the Final Message

Edit the text in Screen 5 (the final message section) in `index.html` to personalize your message.

### Changing Colors

Modify the CSS variables in `style.css` at the top of the file:

```css
:root {
    --primary-pink: #ff69b4;
    --primary-burgundy: #8b1538;
    /* ... other colors ... */
}
```

## File Structure

```
website-01/
├── index.html           # Main HTML structure
├── style.css            # All styles and animations
├── script.js            # Interactive functionality and asset config
├── README.md            # This file
└── assets/              # Media assets folder
    ├── photos/          # Photos folder (minimum 8 required)
    │   ├── pic1.jpeg    # First 8 photos used in heart layout
    │   ├── pic2.jpeg    # 4-5 random photos used in scattered layout
    │   ├── pic3.jpeg
    │   ├── pic4.jpeg
    │   ├── pic5.jpeg
    │   ├── pic6.jpeg
    │   ├── pic7.jpeg
    │   ├── pic8.jpeg    # Minimum 8th photo required
    │   └── ...          # Add more for variety
    ├── music/           # Music folder (1 file required)
    │   └── love.mp3     # Your special song
    └── gifs/            # GIFs folder (optional)
        ├── love.gif
        ├── romantic.gif
        └── ...          # Add as many as you want
```

**File Requirements Summary:**
- **Photos**: Minimum 8 files in `assets/photos/` (recommended: 10+)
- **Music**: 1 file in `assets/music/` (required)
- **GIFs**: Optional, place in `assets/gifs/` (recommended: 5-15)

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Typography

The website uses a romantic, elegant font pairing:
- **Headings**: Playfair Display (serif, romantic, expressive)
- **Body Text**: Poppins (sans-serif, clean, readable)

Fonts are loaded from Google Fonts and optimized for readability on all devices.

## Notes

- The unlock answer is "3" (1 + 2)
- **Photos**: Minimum 8 photos required (for heart layout on Screen 3)
- **Music**: 1 music file required (for audio player on Screen 4)
- **GIF files**: Optional - the site works without them (containers will be empty)
- All animations use CSS for smooth performance
- No external dependencies except Google Fonts
- Missing assets fail gracefully - placeholders shown instead of broken UI

Enjoy creating your special Valentine's Day experience! 💖
# love-surprise
