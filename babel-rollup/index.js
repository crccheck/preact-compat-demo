const { h, render, Component } = require('preact');
const Thing = require('react-thing')

class App extends Component {
  render() {
    return <Thing />
  }
}

render(
  <App />,
  document.body
)
