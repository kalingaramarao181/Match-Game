import './index.css'

const NavBar = props => {
  const {score} = props
  return (
    <div className="nav-container">
      <img
        className="nav-image"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <div className="score-time-container">
        <p className="score">
          Score: <span className="score-counter">{score}</span>
        </p>
        <div className="timer-container">
          <img
            className="timer-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="score-counter">60 sec</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
