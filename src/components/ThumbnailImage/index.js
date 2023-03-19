import './index.css'

const ThumbnailImage = props => {
  const {thumbnailDetails, onMatchImage} = props
  const {thumbnailUrl, id} = thumbnailDetails

  const onClickImage = () => {
    onMatchImage(id)
  }

  return (
    <li className="image-list-item">
      <button onClick={onClickImage} type="button" className="tum-button">
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailImage
