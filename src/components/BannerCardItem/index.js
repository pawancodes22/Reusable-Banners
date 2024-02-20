// Write your code here.
import './index.css'

const BannerCard = props => {
  const {itemDetails} = props
  const {headerText, description, className} = itemDetails
  return (
    <div className={className}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button">Show More</button>
      </div>
    </div>
  )
}

export default BannerCard
