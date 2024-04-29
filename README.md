# Frida Il2cpp Dumper

Generate dump of il2cpp games using frida.

## Overview

This repository provides tools to generate dumps of IL2CPP (Intermediate Language To C++) games using Frida, a dynamic instrumentation toolkit. IL2CPP is a technology from Unity that converts assemblies to C++ code before compiling, which makes it more challenging to reverse engineer games built with it. This project aims to ease the process of extracting useful information from IL2CPP games for analysis and modding purposes.

## Requirements

To use this tool, you'll need the following dependencies:

- `"@types/frida-gum": "^18.5.1"`: TypeScript definitions for Frida Gum, a low-level JavaScript library for building powerful instrumentation tools.
- `"@types/node": "~20.9"`: TypeScript definitions for Node.js.
- `"frida-compile": "^16.4.1"`: A tool to compile TypeScript to JavaScript for use with Frida.
- `"frida-il2cpp-bridge": "^0.9.0"`: A bridge for interacting with IL2CPP applications using Frida.
- `"typescript": "^5.3.3"`: TypeScript compiler.

## Usage

### Installation

1. Clone this repository:

```bash
git clone https://github.com/springmusk026/Frida-Il2cpp-Dumper.git
cd Frida-Il2cpp-Dumper
```

2. Install dependencies:

```bash
npm install
```

### Scripts

- `"spawn": "frida -U -f com.dts.freefireth -l dist/agent.js"`: Spawn a new Frida session targeting the specified application package (`com.dts.freefireth`) and load the compiled agent script (`dist/agent.js`).
- `"build": "frida-compile src/index.ts -o dist/agent.js -c"`: Compile the TypeScript source code (`src/index.ts`) to JavaScript (`dist/agent.js`).
- `"watch": "frida-compile src/index.ts -o dist/agent.js -w"`: Continuously watch for changes in the TypeScript source code and compile to JavaScript.

### Example

To generate a dump of an IL2CPP game, follow these steps:

1. Compile the agent script:

```bash
npm run build
```

2. Run the spawn script, replacing `com.dts.freefireth` with the target application package:

```bash
npm run spawn
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this README to fit your preferences and provide more details about your project if needed!
