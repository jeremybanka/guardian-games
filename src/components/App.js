import { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
// import seedGames from "../data/seedGames"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // inventory: seedGames
    }
  }

  // handleInventoryChange = () => {

  // }

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App
