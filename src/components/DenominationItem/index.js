// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, onSum} = props
  const {id, value} = details
  const addSum = () => {
    onSum(id)
  }
  return (
    <li className="list">
      <button className="button" type="button" onClick={addSum}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
