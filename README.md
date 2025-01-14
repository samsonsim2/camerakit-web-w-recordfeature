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
├── build/             # Production build output
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
  LENS_ID: "__LENS_ID__",
  GROUP_ID: "__GROUP_ID__",
  API_TOKEN: "__API_TOKEN__",
}
```

### Development 🔧

Start the development server:

```bash
npm run serve
```

Webpack will start a development server with HTTPS enabled.
You'll see two URLs in the terminal:

- Local: `https://localhost:9000`
- Network: `https://YOUR_IP_ADDRESS:9000` (for mobile devices)

To test on your mobile device, use the Network URL shown in your terminal.

⚠️ **Notes**:

- Your mobile device must be on the same WiFi network as your computer
- Accept the self-signed certificate warning in your browser when testing
- HTTPS is required for camera access on mobile devices

### Production Build 🏗️

Build the project:

```bash
npm run build
```

Output will be in the `build` directory.

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

MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgments 👏

- Based on Vincent Trastour's Camera Kit tutorial: [Watch on YouTube](https://www.youtube.com/watch?v=ZQM9Ua_JKMY)
- Built with [Snap Camera Kit](https://kit.snapchat.com/camera-kit)
- Uses [FFmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)

---

Happy coding! 🎥✨
