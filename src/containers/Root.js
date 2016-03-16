import React, { Component } from 'react';
import CommentList from '../components/CommentList.js'

const styles = {
  height: '100%',
  background: '#eee'
}

class Root extends Component {
  render() {
    return (
      <div style={styles}>
        <h1 className='welcome-header'>Welcome to testing React!</h1>
      </div>
    )
  }
}

export default Root;