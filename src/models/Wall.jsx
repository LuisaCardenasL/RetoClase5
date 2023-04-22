import React, { useRef, useState } from 'react';
import { DoubleSide } from "three";
import { VideoTexture } from 'three/src/textures/VideoTexture';

export default function Wall(){
    const [video] = useState(() => {
        const vid = document.createElement('video');
        vid.src = 'static/cat.mp4';
        vid.loop = true;
        vid.muted = true;
        vid.crossOrigin = 'anonymous';
        vid.load();
        return vid;
      });
      const videoTexture = useRef(new VideoTexture(video));
    
      const handleClick = () => {
        video.muted = true;
        video.play();
        console.log("Hice clic en el video")
      };

      const handleUnmuted= () => {
        video.muted = false;
        video.play();
        console.log("Desmutear")
      };
    
      return (
        <group>
            <mesh position={[0,0,-0.01]} rotation-y={[- Math.PI * 90]}>
                <planeGeometry/>
                <meshStandardMaterial  side = {DoubleSide}/>
            </mesh>
            <mesh  scale={0.8} onClick={handleClick} onDoubleClick={handleUnmuted}>
                <planeBufferGeometry args={[1, 1]} />
                <meshBasicMaterial map={videoTexture.current}  />
             </mesh>    
        </group>

      );
}