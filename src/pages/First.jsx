import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";

const FirstPage = () => {

    const [isDashVisible, setDashVisible] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setDashVisible(!isDashVisible);
      }, 750);
    }, [isDashVisible])

  return (
      <div style={ { width: "100vw", height: "100vh", background: "black", position: "absolute", top: 0 } }>
          <Canvas>
              <OrbitControls/>
          <pointLight position={ [5, 5, 5] } intensity={10} />
      <Text
        scale={[15, 15, 15]}
        color="white"
        anchorX="center"
        anchorY="middle"
              >
                  HudsonGraeme{ isDashVisible && '_' }
      </Text>
      </Canvas>
        </div>
  );
};

export default FirstPage;
