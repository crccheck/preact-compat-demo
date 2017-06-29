`preact-compat` demo
====================

Preact is pretty awesome, but sometimes you want it to work with React, that's
where `preact-compat` comes in.

This is an attempt to get `preact-compat` to work for a dirt simple app:

```JavaScript
const { h, render, Component } = require('preact')
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
```
