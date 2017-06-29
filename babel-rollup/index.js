// const { h, render, Component } = require('preact')
import { h, render, Component } from 'preact'
// const Thing = require('react-thing')
import * as Thing from 'react-thing'

class App extends Component {
  render() {
    return <Thing />
  }
}

render(
  <App />,
  document.body
)
