<<<<<<< HEAD
/** @format */

import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
=======
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
>>>>>>> 606137dec2f2a9c623743dfe122a9d935a92ac21
import * as THREE from "three";

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model.modelPath);
<<<<<<< HEAD
  const wrapperRef = useRef(null);
  const [visible, setVisible] = useState(false);
=======
>>>>>>> 606137dec2f2a9c623743dfe122a9d935a92ac21

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene]);

<<<<<<< HEAD
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Avoid creating many GL contexts on small screens — use placeholder there
    if (window.innerWidth < 768) return;

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        },
        { rootMargin: "200px" }
      );
      if (wrapperRef.current) io.observe(wrapperRef.current);
      return () => io.disconnect();
    } else {
      setVisible(true);
    }
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} style={{ width: "100%", height: "100%" }}>
      {visible ? (
        <Canvas
          dpr={[1, 1.25]}
          gl={{ powerPreference: "low-power", antialias: true }}
          onCreated={(state) => {
            const canvas = state.gl.domElement || state.gl.canvas;
            if (canvas && canvas.addEventListener) {
              canvas.addEventListener("webglcontextlost", (e) => {
                console.warn("WebGL context lost on TechIconCardExperience", e);
              });
            }
          }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.6} />
          <spotLight
            position={[10, 15, 10]}
            angle={0.3}
            penumbra={1}
            intensity={1}
          />
          <Environment preset="city" />

          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
            <group scale={model.scale} rotation={model.rotation}>
              <primitive object={scene.scene} />
            </group>
          </Float>

          <OrbitControls enableZoom={false} />
        </Canvas>
      ) : (
        <div className="flex-center" style={{ minHeight: 140 }}>
          {/* lightweight placeholder */}
          <span style={{ fontSize: 12, opacity: 0.85 }}>{model.name}</span>
        </div>
      )}
    </div>
=======
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />

      {/* 
        The Float component from @react-three/drei is used to 
        create a simple animation of the model floating in space.
        The rotationIntensity and floatIntensity props control the
        speed of the rotation and float animations respectively.

        The group component is used to scale and rotate the model.
        The rotation is set to the value of the model.rotation property,
        which is an array of three values representing the rotation in
        degrees around the x, y and z axes respectively.

        The primitive component is used to render the 3D model.
        The object prop is set to the scene object returned by the
        useGLTF hook, which is an instance of THREE.Group. The
        THREE.Group object contains all the objects (meshes, lights, etc)
        that make up the 3D model.
      */}
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
>>>>>>> 606137dec2f2a9c623743dfe122a9d935a92ac21
  );
};

export default TechIconCardExperience;
