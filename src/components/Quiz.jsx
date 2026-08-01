import { useState } from 'react'

// Edit these questions/answers to match your real memories together!
const quiz = [
  {
    q: 'Where was our very first date?',
    options: ['The coffee shop downtown', 'That little Italian place', 'The park by the river', 'Somewhere else entirely'],
    correct: 0,
  },
  {
    q: "What's my favorite thing about you?",
    options: ['Your smile', 'Your eyes', 'Your kindness', 'Honestly, all of it'],
    correct: 3,
  },
  {
    q: "What's that one wish I could fulfill for you this year?",
    options: ['A trip together ✈️', "A gift I've always wanted 🎁", 'Just more of your time 💗', 'Something else entirely 💭'],
    isWish: true,
  },
]

const scoredCount = quiz.filter(q => !q.isWish).length

export default function Quiz() {
  const [qIndex, setQIndex] = useState(0)
  const [qScore, setQScore] = useState(0)
  const [selected, setSelected] = useState(null)
  const [done, setDone] = useState(false)

  const totalSteps = quiz.length
  const current = quiz[qIndex]

  const handleAnswer = (i) => {
    if (selected !== null) return
    setSelected(i)
    if (!current.isWish && i === current.correct) setQScore(s => s + 1)
    setTimeout(() => {
      setSelected(null)
      if (qIndex + 1 >= quiz.length) {
        setDone(true)
      } else {
        setQIndex(idx => idx + 1)
      }
    }, 900)
  }

  if (done) {
    return (
      <section>
        <div className="card">
          <h2>How well do you know us? 💭</h2>
          <div id="quiz-result" style={{ display: 'block' }}>
            You scored {qScore}/{scoredCount} on the quiz 💕 — and whatever you picked, I'm making it happen this year.
          </div>
        </div>
      </section>
    )
  }

  return (
    <section>
      <div className="card">
        <h2>How well do you know us? 💭</h2>
        <div id="quiz-progress">Question {qIndex + 1} of {totalSteps}</div>
        <div className="quiz-q active">
          <p className="question">{current.q}</p>
          <div className="quiz-options">
            {current.options.map((opt, i) => {
              let cls = ''
              if (selected !== null) {
                if (current.isWish) {
                  if (i === selected) cls = 'correct'
                } else {
                  if (i === current.correct) cls = 'correct'
                  else if (i === selected) cls = 'wrong'
                }
              }
              return (
                <button key={i} className={cls} disabled={selected !== null} onClick={() => handleAnswer(i)}>
                  {opt}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
