import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Float } from "@react-three/drei";
import * as THREE from "three";

function StaticOmSVG() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-[300px] h-[300px] rounded-full bg-accent-glow blur-[80px]" />
      <svg viewBox="0 0 200 200" className="w-[240px] h-[240px] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="140" fontFamily="'Crimson Pro', serif" fill="#b97a57" opacity="0.7">ॐ</text>
      </svg>
    </div>
  );
}

function OmMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => { if (!meshRef.current) return; meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.26; });
  return (
    <Float speed={1} rotationIntensity={0} floatIntensity={0.3} floatingRange={[-0.3, 0.3]}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.35, 128, 32, 2, 3]} />
        <meshStandardMaterial color="#b97a57" metalness={0.4} roughness={0.5} />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (<><pointLight position={[3, 3, 3]} intensity={1.2} color="#c99175" /><pointLight position={[-3, -2, 2]} intensity={0.36} color="#a0b4c8" /><ambientLight intensity={0.15} /><Center><OmMesh /></Center></>);
}

export function HeroOm3D() {
  const [show3D, setShow3D] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)"); setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches); mql.addEventListener("change", handler);
    const rmql = window.matchMedia("(prefers-reduced-motion: reduce)"); if (rmql.matches) setShow3D(false);
    const rmHandler = (e: MediaQueryListEvent) => setShow3D(!e.matches); rmql.addEventListener("change", rmHandler);
    const vHandler = () => setVisible(!document.hidden); document.addEventListener("visibilitychange", vHandler);
    return () => { mql.removeEventListener("change", handler); rmql.removeEventListener("change", rmHandler); document.removeEventListener("visibilitychange", vHandler); };
  }, []);

  if (isMobile || !show3D) return <StaticOmSVG />;
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(185,122,87,0.18)_0%,transparent_70%)] blur-[80px]" />
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 50 }} frameloop={visible ? "always" : "never"} className="relative z-10" style={{ background: "transparent" }}>
        <Scene />
      </Canvas>
    </div>
  );
}
