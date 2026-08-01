import { useState } from 'react'
import PasswordGate from './components/PasswordGate.jsx'
import Hero from './components/Hero.jsx'
import LoveSlider from './components/LoveSlider.jsx'
import Notes from './components/Notes.jsx'
import PhotoGallery from './components/PhotoGallery.jsx'
import Quiz from './components/Quiz.jsx'
import Confetti from './components/Confetti.jsx'
import FinalNote from './components/FinalNote.jsx'

const Divider = () => <div className="divider">✿ ⁘ ✿</div>

export default function App() {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <>
      <PasswordGate unlocked={unlocked} onUnlock={() => setUnlocked(true)} />

      <Hero />
      <Divider />
      <LoveSlider />
      <Divider />
      <Notes />
      <Divider />
      <PhotoGallery />
      <Divider />
      <Quiz />
      <Divider />
      <Confetti triggerOnMount={unlocked} />
      <FinalNote />
    </>
  )
}
