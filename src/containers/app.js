import React, { Component } from 'react';
import ListItem from '../components/list_item.js'

const styles = {
  height: '100%',
  background: '#eee'
}

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <h1 className='welcome-header'>Testing!</h1>
      </div>
    )
  }
}

export default App;