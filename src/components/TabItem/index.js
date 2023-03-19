import './index.css'

const TabItem = props => {
  const {tabDetails, onSelectedThumbnails} = props
  const {displayText, tabId} = tabDetails

  const onSelectTab = () => {
    onSelectedThumbnails(tabId)
  }

  return (
    <li className="tab-item">
      <button onClick={onSelectTab} type="button" className="tab-button">
        <h1 className="tab-text">{displayText}</h1>
      </button>
    </li>
  )
}

export default TabItem
