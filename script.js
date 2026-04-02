import * as THREE from 'three';
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
    import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

    // --- CONFIGURATION OBJECT ---
    const params = {
        // Animation
        timeScale: 0.78,
        rotationSpeedX: 0.002, 
        rotationSpeedY: 0.005,
        
        // Plasma
        plasmaScale: 0.1404,      // Texture Scale
        plasmaBrightness: 1.31,   // Brightness
        voidThreshold: 0.072,    // Voids
        colorDeep: 0x001433,      // Color Deep
        colorMid: 0x0084ff,       // Color Mid
        colorBright: 0x00ffe1,    // Color Bright
        
        // Shell
        shellColor: 0x0066ff,     // Edge Color
        shellOpacity: 0.41        // Edge Opacity
    };

    // 1. SCENE SETUP
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 2.4;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // TONE MAPPING
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9; 
    document.body.appendChild(renderer.domElement);
