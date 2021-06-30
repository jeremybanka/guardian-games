const Description = ({ gameSummaries }) => {
  const { description } = gameSummaries[0]
  return (
    <p>
      {description}
    </p>
  )
}

export default Description
