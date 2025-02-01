# Corebell Engine

Corebell Engine is a high-performance 3D web engine designed to create immersive and interactive experiences directly in the browser. Built with modern web technologies, it offers developers a robust framework for rendering real-time 3D graphics efficiently.

## Features
- **Web-Based:** Runs entirely in the browser with no installation required.
- **High-Performance Rendering:** Uses WebGL and WebGPU for fast and efficient 3D rendering.
- **Modular Architecture:** Easily extensible with plugins and custom modules.
- **Cross-Platform:** Works across desktop and mobile devices.
- **Physics & Animation:** Built-in physics engine and animation support.
- **Developer-Friendly:** Well-documented API with an intuitive structure.
- **Open Source:** Free to use and contribute to under the MIT license.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/manugeni/corebell.git
   ```
2. Navigate to the project directory:
   ```sh
   cd corebell
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
Corebell Engine provides an easy-to-use API for rendering 3D content. Example usage:
```js
import { CorebellEngine } from 'corebell.js';

const engine = new Corebell();
engine.init(document.getElementById('canvas'));
engine.loadScene('exampleScene.glb');
engine.start();
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch.
3. Implement your changes.
4. Submit a pull request for review.

## License
Corebell Engine is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For questions or suggestions, reach out via:
- **Email:** rendaniman@outlook.com
- **GitHub Issues:** [Report an issue](https://github.com/manugeni/corebell/issues)

