import PropTypes from "prop-types"

const { number, string, arrayOf, exact } = PropTypes

const TopList = ({ gameSummaries = [] }) =>
  gameSummaries.map((gameSummary, idx) => {
    const { imageUrl, name, quantity, description } = gameSummary
    return (
      <TopListItem
        key={idx}
        imageUrl={imageUrl}
        name={name}
        quantity={quantity}
        description={description}
      />
    )
  })

const TopListItem = ({ imageUrl, name, quantity, description }) => {
  const truncatedDescription = description.slice(0, 140).concat(`...`)
  return (
    <section>
      <img
        src={imageUrl}
        alt={name}
        style={{ opacity: quantity ? 1 : 0.5 }}
      />
      <h3>{name}: {quantity} in stock</h3>
      <p>{truncatedDescription}</p>
      <button type='button'>View</button>
      <button type='button'>Add to cart</button>
    </section>
  )
}

TopListItem.propTypes = {
  imageUrl: string.isRequired,
  name: string.isRequired,
  quantity: number.isRequired,
  description: string.isRequired,
}

TopList.propTypes = {
  gameSummaries: arrayOf(exact(TopListItem.propTypes)),
}

export default TopList
