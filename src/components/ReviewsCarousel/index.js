import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    listIndex: 0,
  }

  onLeftClick = () => {
    const {listIndex} = this.state
    if (listIndex !== 0) {
      this.setState(prevState => ({listIndex: prevState.listIndex - 1}))
    }
  }

  onRightClick = () => {
    const {listIndex} = this.state
    const {reviewsList} = this.props
    const listEndIndex = reviewsList.length - 1
    if (listIndex !== listEndIndex) {
      this.setState(prevState => ({listIndex: prevState.listIndex + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {listIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[listIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="slider-container">
          <button
            type="button"
            className="arrow-btn"
            onClick={this.onLeftClick}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-img"
            />
          </button>
          <div className="reviews-container">
            <img src={imgUrl} alt={username} className="profile-img" />
            <p className="username">{username}</p>
            <p className="review-text">{companyName}</p>
            <p className="review-text">{description}</p>
          </div>
          <button
            type="button"
            className="arrow-btn"
            onClick={this.onRightClick}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-img"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
