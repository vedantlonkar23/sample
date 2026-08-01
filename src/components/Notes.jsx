import { useState } from 'react'

// Edit these to say whatever you want each flipped heart to reveal
const noteTexts = [
  'I could get lost in your eyes all day.',
  'You make ordinary days feel special.',
  'I still get excited when I see your name pop up.',
  "You're the best part of my day, every day.",
  'I love the way you see the world.',
  'Being with you feels like home.',
]

function FlipCard({ text }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <div className={`flip${flipped ? ' flipped' : ''}`} onClick={() => setFlipped(f => !f)}>
      <div className="flip-inner">
        <div className="flip-front">💌 tap me</div>
        <div className="flip-back">{text}</div>
      </div>
    </div>
  )
}

export default function Notes() {
  return (
    <section>
      <div className="card">
        <h2>Tap a heart for a little note</h2>
        <p className="sub">Six tiny truths, one tap away.</p>
        <div className="notes-grid">
          {noteTexts.map((text, i) => <FlipCard key={i} text={text} />)}
        </div>
      </div>
    </section>
  )
}
