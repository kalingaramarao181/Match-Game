import {Component} from 'react'
import NavBar from '../NavBar'
import TabItem from '../TabItem'
import ThumbnailImage from '../ThumbnailImage'

import './index.css'

class MatchGame extends Component {
  state = {
    isTimeCompleted: true,
    thumbnailList: [],
    activeTabId: 'FRUIT',
    score: 0,
    timer: 60,
    checkImage: '',
  }

  componentDidMount() {
    const timerId = setInterval(this.runningTime, 1000)
  }

  runningTime = () => {
    this.setState(prevState => ({timer: prevState.timer - 1}))
  }

  getRandomImageDetails = () => {
    const {imagesList} = this.props
    const randomNumber = Math.floor(Math.random() * imagesList.length)
    return imagesList[randomNumber]
  }

  onMatchImage = clickId => {
    const randomImage = this.getRandomImageDetails()
    const {id} = randomImage
    this.setState({checkImage: clickId})
    if (clickId === id) {
      console.log('Is Same')
    }
  }

  onSelectedThumbnails = tabId => {
    const activeTab = tabId
    console.log(tabId)
    return activeTab
  }

  getFilteredThumbnailsList = () => {
    const activeTab = this.onSelectedThumbnails
    console.log(activeTab)
    const {imagesList} = this.props
    const filteredThumbnailsList = imagesList.filter(
      eachItem => eachItem.category === activeTab,
    )
    return filteredThumbnailsList
  }

  renderTabsList = () => {
    const {tabsList} = this.props

    return (
      <ul className="tab-item-container">
        {tabsList.map(eachTab => (
          <TabItem
            onSelectedThumbnails={this.onSelectedThumbnails}
            key={eachTab.tabId}
            tabDetails={eachTab}
          />
        ))}
      </ul>
    )
  }

  palyAgain = () => {
    this.setState({isTimeCompleted: true})
  }

  renderResultPage = () => {
    const {score} = this.state
    return (
      <div className="result-background">
        <div className="result-card">
          <img
            className="trophy"
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
          />
          <p className="score-text">YOUR SCORE</p>
          <p className="score">{score}</p>
          <button
            onClick={this.palyAgain}
            className="restart-button"
            type="button"
          >
            <img
              className="restart-icon"
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  renderViewPage = () => {
    const filteredThumbnailsList = this.getFilteredThumbnailsList()

    const randomImage = this.getRandomImageDetails()
    const {imageUrl} = randomImage
    return (
      <div>
        <img className="random-image" src={imageUrl} alt="randomImg" />
        {this.renderTabsList()}

        <ul className="thumbnail-image-container">
          {filteredThumbnailsList.map(eachImg => (
            <ThumbnailImage
              onMatchImage={this.onMatchImage}
              key={eachImg.id}
              thumbnailDetails={eachImg}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderImages = () => {
    const {isTimeCompleted} = this.state
    return (
      <div className="container">
        {isTimeCompleted ? this.renderViewPage() : this.renderResultPage()}
      </div>
    )
  }

  render() {
    const {score, timer} = this.state
    return (
      <div>
        <NavBar timer={timer} score={score} />
        {this.renderImages()}
      </div>
    )
  }
}

export default MatchGame
