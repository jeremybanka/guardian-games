import Hero from './Hero'
import Toplist from './Toplist'
import seedGames from '../../data/seedGames'

export default () => (
  <main>
    <Hero gameSummaries={seedGames} />
    <Toplist gameSummaries={seedGames} />
  </main>
)
