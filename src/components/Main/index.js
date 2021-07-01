import Hero from './Hero'
import Toplist from './Toplist'
import seedGames from '../../data/seedGames'

export default () => {
  const topGamesBesidesFirst = seedGames.slice(1)
  return (
    <main>
      <Hero gameSummaries={seedGames} />
      <Toplist gameSummaries={topGamesBesidesFirst} />
    </main>
  )
}
