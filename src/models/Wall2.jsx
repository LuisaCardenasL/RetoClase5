import React, { useState, useRef } from "react";
import { Text, useTexture } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';

import { DoubleSide } from "three";

const Wall2 = () => {
  const [imageSrc, setImageSrc] = useState('/static/1.jpg');

  const texture = useTexture(imageSrc);

  const handleEvent = () => {
    let index = Math.floor(Math.random() * 3) + 1;
    setImageSrc(`/static/${index}.jpg`)
  };

  return (
    <>
      
      <mesh position={[0.5, 0, 0.5]} rotation-y={[- Math.PI * 0.5]} onPointerEnter={handleEvent}>
        <planeGeometry />
        <meshStandardMaterial map={texture} ide = {DoubleSide}/>
      </mesh>
    </>
  );
};

export default Wall2;