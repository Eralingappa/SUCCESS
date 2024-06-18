import './index.css'
const TabItem = props => {
  const {details, changeState, isActive} = props
  const {id, buttonText} = details
  const classEL = isActive === true ? 'activeEl' : 'noActive'

  const ok = () => {
    changeState(id)
  }
  return (
    <li className="button-list">
      <button className={classEL} type="button" onClick={ok}>
        {buttonText}
      </button>
    </li>
  )
}
export default TabItem
