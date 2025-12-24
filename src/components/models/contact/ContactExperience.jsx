<<<<<<< HEAD
/** @format */

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { memo, useState } from "react";
=======
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
>>>>>>> 606137dec2f2a9c623743dfe122a9d935a92ac21

import Computer from "./Computer";

const ContactExperience = () => {
<<<<<<< HEAD
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="contact-canvas-wrapper" style={{ position: "relative" }}>
      <Canvas
        frameloop="demand"
        dpr={[1, 1.25]}
        shadows={false}
        gl={{ powerPreference: "low-power", antialias: true }}
        onCreated={(state) => {
          const canvas = state.gl.domElement || state.gl.canvas;
          if (canvas && canvas.addEventListener) {
            canvas.addEventListener("webglcontextlost", (e) => {
              console.warn("WebGL context lost on ContactExperience", e);
            });
          }
        }}
        camera={{ position: [0, 3, 7], fov: 45 }}
        style={{ pointerEvents: "auto" }}
      >
        <ambientLight intensity={0.6} color="#fff4e6" />

        <directionalLight
          position={[5, 5, 3]}
          intensity={0.8}
          color="#ffd9b3"
        />

        <directionalLight
          position={[5, 9, 1]}
          intensity={0.8}
          color="#ffd9b3"
        />

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          enableKeys={false}
        />

        <group scale={[1, 1, 1]}>
          <mesh
            receiveShadow
            position={[0, -1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#a46b2d" />
          </mesh>
        </group>

        <group scale={0.03} position={[0, -1.49, -2]} castShadow>
          <Computer onMeshClick={() => setShowInfo((s) => !s)} />
        </group>
      </Canvas>

      {showInfo && (
        <div
          className="contact-overlay"
          role="dialog"
          aria-label="Contact info"
          onClick={() => setShowInfo(false)}
        >
          <h4>Contact</h4>
          <p>
            Click to close —{" "}
            <a href="mailto:youremail@example.com">youremail@example.com</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default memo(ContactExperience);
=======
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      <ambientLight intensity={0.5} color="#fff4e6" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>

      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
>>>>>>> 606137dec2f2a9c623743dfe122a9d935a92ac21
