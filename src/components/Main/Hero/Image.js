const Image = ({ gameSummaries }) => {
  const { imageUrl, name } = gameSummaries[0]
  return (
    <img src={imageUrl} alt={name} />
  )
}

export default Image
