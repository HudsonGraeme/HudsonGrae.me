import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats, Text } from "@react-three/drei";
import DashComponent from "./DashComponent";

const ThreeDName = () => {
  return (
      <span><Canvas style={ {height: "100px", width: "200px"}}>
      <pointLight position={[5, 5, 5]} />
      <Text
        scale={[15, 15, 15]}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
              HudsonGraeme
      </Text>
      </Canvas>
        </span>
  );
};

export default ThreeDName;
