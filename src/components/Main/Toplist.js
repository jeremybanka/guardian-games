export default ({ gameSummaries = [] }) =>
  gameSummaries.map((gameSummary, idx) => (
    <TopListItem key={idx} gameSummary={gameSummary} />
  ))

const TopListItem = ({ gameSummary }) => {
  const { imageUrl, name, quantity } = gameSummary
  return (
    <section>
      <img src={imageUrl} alt={name} />
      <h3>{name}: {quantity} in stock</h3>
      <button type='button'>View</button>
      <button type='button'>Add to cart</button>
    </section>
  )
}
