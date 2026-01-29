import { useState } from 'react'
import './App.css'

function App() {
  const [showResult, setShowResult] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const [noButtonPos, setNoButtonPos] = useState({ left: '54%', top: 'auto' })

  const handleNoHover = (e) => {
    const container = e.target.closest('.question-container')
    const newX = Math.floor(Math.random() * container.offsetWidth)
    const newY = Math.floor(Math.random() * container.offsetWidth)
    setNoButtonPos({ left: `${newX}px`, top: `${newY}px` })
  }

  const handleYesClick = () => {
    setShowLoader(true)
    setTimeout(() => {
      setShowLoader(false)
      setShowResult(true)
    }, 3000)
  }

  return (
    <>
      {!showResult && (
        <div className="question-container container">
          <video className="local-gif" src="/Reply me love.mp4" autoPlay muted loop />
          <h2 className="question">Do you love me?</h2>
          <div className="button-container">
            <button className="yes-btn btn js-yes-btn" onClick={handleYesClick}>Yes</button>
            <button 
              className="no-btn btn js-no-btn" 
              onMouseOver={handleNoHover}
              style={noButtonPos}
            >
              No
            </button>
          </div>
        </div>
      )}

      {showResult && (
        <div className="result-container container" style={{ display: 'block' }}>
          <video className="gif-result" src="/Love me.mp4" autoPlay loop />
          <h2>I knew it😍!</h2>
        </div>
      )}

      {showLoader && (
        <div className="cssload-main" style={{ display: 'block' }}>
          <div className="cssload-heart">
            <span className="cssload-heartL"></span>
            <span className="cssload-heartR"></span>
            <span className="cssload-square"></span>
          </div>
          <div className="cssload-shadow"></div>
        </div>
      )}
    </>
  )
}

export default App
