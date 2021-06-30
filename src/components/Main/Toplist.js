export default ({ gameSummaries }) =>
  gameSummaries.map((gameSummary, idx) => (
    <TopListItem key={idx} gameSummary={gameSummary} />
  ))

const TopListItem = ({ gameSummary }) => {
  const { imageUrl, description } = gameSummary
  return (
    <>
    </>
  )
}
