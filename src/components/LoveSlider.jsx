import { useState } from 'react'

const messages = [
  [0, "Impossible to measure — but let's try.", '🤔'],
  [20, "A little? Nah — keep dragging.", '😏'],
  [40, 'Getting warmer!', '😊'],
  [60, "Now we're talking.", '🥰'],
  [80, 'So close to the truth!', '😍'],
  [99, 'Almost there...', '🥺'],
  [100, "Still not enough — it's infinite.", '♾️💗'],
]

function getMessage(v) {
  let m = messages[0]
  for (const item of messages) {
    if (v >= item[0]) m = item
  }
  return m
}

export default function LoveSlider() {
  const [value, setValue] = useState(70)
  const [, text, emoji] = getMessage(value)

  return (
    <section>
      <div className="card">
        <h2>How much do I love you?</h2>
        <p className="sub">Drag the slider... though fair warning, it doesn't go high enough.</p>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          id="love-slider"
          onChange={e => setValue(parseInt(e.target.value, 10))}
        />
        <div id="love-readout">
          <strong>{value}%</strong>
          <br />
          {text}
          <span id="love-emoji">{emoji}</span>
        </div>
      </div>
    </section>
  )
}
