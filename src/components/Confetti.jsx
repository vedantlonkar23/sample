import { useEffect, useRef } from 'react'

const emojiSet = ['🌸', '🌷', '💮', '🌺', '💗', '✿', '🏵️','🌻','😘']

export default function Confetti({ triggerOnMount }) {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  const animate = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let alive = false
    particlesRef.current.forEach(p => {
      p.y += p.speed
      p.x += p.drift
      p.rot += p.rotSpeed
      if (p.y < canvas.height + 30) alive = true
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate((p.rot * Math.PI) / 180)
      ctx.font = `${p.r}px serif`
      ctx.textAlign = 'center'
      ctx.fillText(p.emoji, 0, 0)
      ctx.restore()
    })
    if (alive) {
      rafRef.current = requestAnimationFrame(animate)
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  const burst = () => {
    const canvas = canvasRef.current
    particlesRef.current = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height * 0.5,
      r: 14 + Math.random() * 14,
      speed: 1.5 + Math.random() * 2.5,
      drift: (Math.random() - 0.5) * 1.5,
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 4,
      emoji: emojiSet[Math.floor(Math.random() * emojiSet.length)],
    }))
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (triggerOnMount) {
      const t = setTimeout(burst, 4000)
      return () => clearTimeout(t)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerOnMount])

  return (
    <>
      <canvas id="confetti-canvas" ref={canvasRef} />
      <section className="confetti-wrap">
        <h2 style={{ color: 'var(--rose)', marginBottom: 10 }}>One more thing...</h2>
        <p style={{ color: '#7a5568', marginBottom: 26 }}>Tap the button. Watch what happens. 🌸</p>
        <button id="confetti-btn" onClick={burst}>Make it rain flowers 🌷</button>
      </section>
    </>
  )
}
