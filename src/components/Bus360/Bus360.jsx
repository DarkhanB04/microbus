import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "./Bus360.css"; // Import styles
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { containerVariants, textVariants } from "../../framerVariants";
// Sphere component for the 360° experience
function Sphere({ isInteractive }) {
  const texture = useLoader(TextureLoader, "/microbus/three.jpg");
  const meshRef = useRef();

  // Rotate the sphere for a dynamic effect
  useFrame(() => {
    if (isInteractive) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[10, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

const Bus360 = () => {
  const [is360Visible, setIs360Visible] = useState(false);
  const { t } = useTranslation();

  // Toggle the visibility of the 360° experience
  const handleStart360 = () => {
    setIs360Visible(true);
  };

  const handleClose360 = () => {
    setIs360Visible(false);
  };

  return (
    <motion.div
      className="bus360-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {!is360Visible && (
        <motion.div
          className="preview-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="static-cont"
            custom={1}
            variants={textVariants}
          >
            <div className="static-cont-decor1"></div>
            <div alt="360 Preview" className="static-preview">
              {" "}
            </div>
            <div className="static-cont-decor2"></div>
          </motion.div>

          <motion.div
            className="start-360-button"
            custom={2}
            variants={textVariants}
          >
            <button onClick={handleStart360}>{t("bus360.try")}</button>
          </motion.div>
        </motion.div>
      )}

      {is360Visible && (
        <div className="popup-overlay-three">
          <div className="canvas-container popup-three">
            <Suspense
              fallback={<div className="loading-placeholder">Loading...</div>}
            >
              <Canvas>
                <Sphere isInteractive={true} />
                <OrbitControls enableZoom={false} autoRotate={false} />
              </Canvas>
            </Suspense>
          </div>
          <button className="close-button" onClick={handleClose360}>
            &times;
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Bus360;
