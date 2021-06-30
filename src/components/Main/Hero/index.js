import Image from './Image'
import Description from './Description'
import CTA from './CTA'

export default ({ gameSummaries }) => (
  <section>
    <Image gameSummaries={gameSummaries} />
    <Description gameSummaries={gameSummaries} />
    <CTA gameSummaries={gameSummaries} />
  </section>
)
