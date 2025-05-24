import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const ThreeFunnyCube = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Funny cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: 0xffa500,
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 3;

    // GSAP animation (funny style)
    gsap.to(cube.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      duration: 4,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(cube.scale, {
      x: 1.5,
      y: 1.5,
      z: 1.5,
      duration: 2,
      ease: "elastic.out(1, 0.3)",
      repeat: -1,
      yoyo: true,
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup with null check
    return () => {
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        background: "#0a0a0a",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#fff",
          fontSize: "24px",
          fontFamily: "Comic Sans MS, cursive",
          textAlign: "center",
        }}
      >
        💻 TauCode: "likh de Haryanvi me code bhai!"
      </div>
    </div>
  );
};

export default ThreeFunnyCube;
