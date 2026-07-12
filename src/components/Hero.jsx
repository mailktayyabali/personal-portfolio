import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Stars, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Mouse and scroll tracker to animate the 3D scene
function SceneContent({ mouse }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return
    
    // Get current scroll position
    const scrollY = window.scrollY
    
    // Interpolate tilt of the entire 3D container based on mouse pointer
    const targetX = (mouse.x * Math.PI) / 8
    const targetY = (mouse.y * Math.PI) / 8
    groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05
    groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05
    
    // Scroll animation: push shapes back and rotate them as you scroll down
    groupRef.current.position.z = -scrollY * 0.005
    groupRef.current.rotation.z = scrollY * 0.0015
    groupRef.current.position.y = -scrollY * 0.001
  })

  return (
    <group ref={groupRef}>
      {/* Top Left Floating Cube */}
      <Float speed={2} floatIntensity={1.5} rotationIntensity={1} position={[-2.2, 1.4, 0]}>
        <FloatingMesh shape="cube" color="#00f5ff" size={0.5} />
      </Float>

      {/* Top Right Floating Octahedron */}
      <Float speed={1.8} floatIntensity={2} rotationIntensity={1.5} position={[2.4, 1.2, -0.5]}>
        <FloatingMesh shape="octahedron" color="#a855f7" size={0.6} />
      </Float>

      {/* Bottom Left Floating Ring (Torus) */}
      <Float speed={1.5} floatIntensity={1.2} rotationIntensity={1} position={[-2.5, -1.2, 0.5]}>
        <FloatingMesh shape="ring" color="#7c3aed" size={0.7} />
      </Float>

      {/* Bottom Right Floating Cube */}
      <Float speed={2.2} floatIntensity={1.8} rotationIntensity={1.2} position={[2.2, -1.3, 0]}>
        <FloatingMesh shape="cube" color="#00f5ff" size={0.35} />
      </Float>

      {/* Floating Dots / Particle Nodes */}
      <Float speed={1} floatIntensity={0.5} position={[-1.2, 0.3, 0.2]}>
        <FloatingMesh shape="dot" color="#00f5ff" size={0.08} />
      </Float>
      <Float speed={1.2} floatIntensity={0.6} position={[1.3, -0.2, 0.1]}>
        <FloatingMesh shape="dot" color="#a855f7" size={0.08} />
      </Float>
    </group>
  )
}

function FloatingMesh({ shape, color, size }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    
    // Read scroll to adjust rotation speed
    const scrollY = window.scrollY
    const speedMultiplier = 1 + scrollY * 0.005

    // Gentle continuous rotation (accelerated by scrolling)
    meshRef.current.rotation.x += delta * 0.2 * speedMultiplier
    meshRef.current.rotation.y += delta * 0.3 * speedMultiplier

    // Scale up slightly on hover
    const targetScale = hovered ? 1.3 : 1.0
    meshRef.current.scale.setScalar(
      THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1)
    )
  })

  const getGeometry = () => {
    switch (shape) {
      case 'cube':
        return <boxGeometry args={[size, size, size]} />
      case 'octahedron':
        return <octahedronGeometry args={[size]} />
      case 'ring':
        return <torusGeometry args={[size, size * 0.12, 16, 100]} />
      case 'dot':
      default:
        return <sphereGeometry args={[size, 16, 16]} />
    }
  }

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {getGeometry()}
      {shape === 'ring' ? (
        <MeshDistortMaterial
          color={color}
          distort={0.2}
          speed={3}
          roughness={0.1}
          metalness={0.9}
        />
      ) : (
        <meshPhysicalMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={hovered ? 0.6 : 0}
        />
      )}
    </mesh>
  )
}

function Typewriter({ words, speed = 80, delay = 2000 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer
    const fullText = words[currentWordIndex]

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1))
      }, speed / 2)
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1))
      }, speed)
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), delay)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay])

  return (
    <span className="animate-blink pr-1" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
      {currentText}
    </span>
  )
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    setTimeout(() => setMounted(true), 100)
  }, [])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: -(e.clientY - rect.top) / rect.height + 0.5, // inverted for 3D coordinates
    })
  }

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* 3D Canvas Background replacing 2D SVGs */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }} eventSource={containerRef}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f5ff" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
          <directionalLight position={[0, 5, 0]} intensity={0.5} />
          
          <SceneContent mouse={mouse} />
          <Stars radius={100} depth={50} count={600} factor={4} saturation={0.5} fade speed={1} />
        </Canvas>
      </div>

      {/* Main content */}
      <div className="relative text-center px-8 max-w-5xl mx-auto" style={{ zIndex: 2 }}>
        <div
          className="text-xs tracking-widest mb-6"
          style={{
            color: 'var(--primary)',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.1s',
          }}
        >
          {'// MERN STACK DEVELOPER'}
        </div>

        <h1
          className="font-bold leading-none mb-6"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease 0.2s',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{
            background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            TAYYAB
          </span>
          <br />
          <span style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: 'none',
            filter: 'drop-shadow(0 0 30px rgba(0,245,255,0.3))',
          }}>
            ALI
          </span>
        </h1>

        <div
          className="text-base md:text-lg font-bold tracking-wide mb-6 min-h-[3.5rem] md:min-h-[2rem]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.3s',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          <Typewriter
            words={[
              "Building high-performance full-stack web applications.",
              "Designing clean database architectures with MongoDB & MySQL.",
              "Developing responsive frontends using React & Tailwind CSS.",
              "Writing clean, modular, and maintainable code."
            ]}
          />
        </div>

        <p
          className="text-sm leading-relaxed mb-10 max-w-lg mx-auto"
          style={{
            color: 'rgba(232, 232, 240, 0.85)',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.4s',
          }}
        >
          Detail-oriented MERN Stack Developer passionate about crafting highly responsive, scalable web applications.
          Bridging clean frontend aesthetics with robust, secure backend architectures.
        </p>

        <div
          className="flex gap-4 justify-center"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.6s',
          }}
        >
          <GlowButton
            primary
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            VIEW WORK
          </GlowButton>
          <GlowButton
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            GET IN TOUCH
          </GlowButton>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            opacity: mounted ? 0.4 : 0,
            transition: 'opacity 1s ease 1.2s',
          }}
        >
          <div className="text-xs tracking-widest" style={{ color: 'var(--muted-foreground)' }}>SCROLL</div>
          <div className="w-px h-12 animate-pulse-glow" style={{ background: 'linear-gradient(to bottom, var(--primary), transparent)' }} />
        </div>
      </div>
    </section>
  )
}

function GlowButton({ children, primary, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="px-8 py-3 text-xs tracking-widest font-bold transition-all duration-300 cursor-pointer border"
      style={{
        background: primary
          ? hovered ? 'var(--primary)' : 'transparent'
          : 'transparent',
        color: primary
          ? hovered ? 'var(--primary-foreground)' : 'var(--primary)'
          : hovered ? 'var(--foreground)' : 'var(--muted-foreground)',
        borderColor: primary ? 'var(--primary)' : 'rgba(255,255,255,0.15)',
        boxShadow: primary && hovered ? '0 0 30px rgba(0,245,255,0.4)' : 'none',
        borderRadius: '2px',
      }}
    >
      {children}
    </button>
  )
}
