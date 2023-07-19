import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PositionPoint,
  Preload,
  useGLTF,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={0.12}
        intensity={1}
        castShadow
        shadow-mapsize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -2.45]}
        rotation={[0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // add a listner for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    console.log(mediaQuery);
    // Set the initial value of the 'ismobile' state variable
    setIsMobile(mediaQuery.matches);

    // Define callback function to handle changes to the media query'
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add a call back function as a listner for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      // remove the call back function because it is useEffect
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />p
    </Canvas>
  );
};

export default ComputersCanvas;
