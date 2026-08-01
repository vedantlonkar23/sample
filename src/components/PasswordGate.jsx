import { useState } from 'react'

// Change this to your own secret word
export const PASSWORD = 'iloveyou'

export default function PasswordGate({ unlocked, onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const tryUnlock = () => {
    if (value.trim().toLowerCase() === PASSWORD.toLowerCase()) {
      onUnlock()
    } else {
      setError('Not quite — try again 💗')
      setValue('')
    }
  }

  return (
    <div id="gate" className={unlocked ? 'hidden' : ''}>
      <div className="envelope">
        <div className="seal">💗</div>
        <h2>A Little Something For You</h2>
        <p>This letter is just for you. Type the secret word to open it.</p>
        <input
          id="pw-input"
          type="password"
          placeholder="•••••••"
          autoComplete="off"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') tryUnlock() }}
        />
        <br />
        <button id="pw-submit" onClick={tryUnlock}>Unlock ✨</button>
        <div id="pw-error">{error}</div>
        <div id="pw-hint">Hint: it's the word for how I feel about you </div>
      </div>
    </div>
  )
}
