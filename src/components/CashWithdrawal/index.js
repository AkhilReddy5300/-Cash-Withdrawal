// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  onSum = id => {
    const {cash} = this.state
    let amount
    switch (id) {
      case 1:
        amount = 50
        break
      case 2:
        amount = 100
        break
      case 3:
        amount = 200
        break
      case 4:
        amount = 500
        break
      default:
        break
    }
    this.setState(prevState => ({cash: prevState.cash - amount}))
  }

  render() {
    const {cash} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card">
          <div className="name-cont">
            <div className="round">S</div>
            <p className="sarah">Sarah Williams</p>
          </div>
          <div className="balance-cont">
            <p className="yourBalance">Your Balance</p>
            <p className="cash">
              {cash}
              <br />
              <span className="span">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                details={each}
                onSum={this.onSum}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
