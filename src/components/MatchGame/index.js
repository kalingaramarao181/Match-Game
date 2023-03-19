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
    index: 0,
    checkImage: '',
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

  renderResultPage = () => <div>Result</div>

  renderViewPage = () => {
    const filteredThumbnailsList = this.getFilteredThumbnailsList()

    const randomImage = this.getRandomImageDetails()
    const {imageUrl} = randomImage
    return (
      <div className="container">
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
      <div>
        {isTimeCompleted ? this.renderViewPage() : this.renderResultPage()}
      </div>
    )
  }

  render() {
    const {score} = this.state
    return (
      <div>
        <NavBar score={score} />
        {this.renderImages()}
      </div>
    )
  }
}

export default MatchGame
