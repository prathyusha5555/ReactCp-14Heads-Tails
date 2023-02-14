import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {total: 0, headsCount: 0, tailsCount: 0, isHeads: true}

  onClickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    let isHeads
    if (tossResult === 0) {
      isHeads = true
    } else {
      isHeads = false
    }

    if (isHeads === true) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        headsCount: prevState.headsCount + 1,
        isHeads: true,
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tailsCount: prevState.tailsCount + 1,
        isHeads: false,
      }))
    }
  }

  render() {
    const {isHeads, headsCount, tailsCount, total} = this.state
    return (
      <div className="app-container">
        <div className="content-box">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="caption">Heads (or) Tails</p>
          {isHeads ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="image"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="image"
              alt="toss result"
            />
          )}
          <button
            className="button"
            type="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="results-container">
            <p className="result">Total:{total}</p>
            <p className="result">Heads:{headsCount}</p>
            <p className="result">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
