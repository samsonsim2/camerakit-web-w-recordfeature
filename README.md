# Camera Kit Web Demo with Recording Feature 🎥

A web application demonstrating Snap's Camera Kit integration with video recording capabilities. This project allows users to apply Snap Lenses and record videos with the effects.

> ⚠️ **SECURITY WARNING**  
> **DO NOT USE THIS REPOSITORY FOR CLIENT PROJECTS**  
> The Camera Kit API Token is exposed in client-side code. For production use, implement server-side token handling.

## Features ✨

- **Snap Lens Integration** 🎭
- **Video Recording** 📹
- **Front/Back Camera Switch** 🔄
- **Share Recording** 📤
- **Download Recording** ⬇️
- **Loading Animation** ⌛
- **Responsive Design** 📱

## Tech Stack 🛠️

- Camera Kit for Web
- FFmpeg.wasm (for video processing)
- Webpack 5
- MediaRecorder API
- Web Share API

## Project Structure 📁

```
project/
├── src/
│   ├── assets/         # Images and icons
│   │   ├── BackButton.png
│   │   ├── DownloadButton.png
│   │   ├── LoadingIcon.png
│   │   ├── Powered_bysnap.png
│   │   ├── RecordButton.png
│   │   ├── RecordOutline.png
│   │   ├── RecordStop.png
│   │   ├── ShareButton.png
│   │   └── SwitchButton.png
│   ├── styles/        # CSS files
│   │   └── index.v3.css
│   ├── config.js      # Camera Kit credentials
│   ├── index.html     # Main HTML file
│   └── main.js        # Main JavaScript file
├── docs/              # Production build output
├── webpack.config.js  # Webpack configuration
└── package.json       # Project dependencies
```

## Getting Started 🚀

### Prerequisites 📋

- Node.js (v14 or higher)
- npm (v6 or higher)
- Camera Kit credentials from Snap

### Installation 💿

1. Clone the repository:

```bash
git clone <your-repository-url>
cd camerakit-web-w-recordfeature
```

2. Install dependencies:

```bash
npm install
```

3. Configure Camera Kit credentials:
   Create `src/config.js` with your credentials:

```javascript
export const CONFIG = {
  API_TOKEN: "your_api_token_here",
  LENS_ID: "your_lens_id_here",
  GROUP_ID: "your_group_id_here",
}
```

### Development 🔧

Start the development server:

```bash
npm run dev
```

Access at `http://localhost:9000`

### Production Build 🏗️

Build the project:

```bash
npm run build
```

Output will be in the `docs` directory.

## Browser Support 🌐

- Chrome (latest) ✅
- Firefox (latest) 🦊
- Safari (iOS 14.5+) 📱
- Edge (latest) 🌍

## Troubleshooting 🔧

### Common Issues ⚠️

1. **Build Errors**:

   - Ensure all dependencies are installed
   - Check webpack configuration
   - Verify file paths in imports

2. **Camera Issues**:

   - Use HTTPS for camera access
   - Grant camera permissions
   - Check browser compatibility

3. **Recording Issues**:
   - Ensure sufficient device storage
   - Check MediaRecorder support
   - Verify permissions

## License 📄

[Your chosen license]

## Acknowledgments 👏

- Built with [Snap Camera Kit](https://kit.snapchat.com/camera-kit)
- Uses [FFmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)

---

Happy coding! 🎥✨
