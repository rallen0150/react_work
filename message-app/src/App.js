import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageView from './messages/message_view';
// import MessageList from './messages/message_list';

class App extends Component {
  render() {
    return(
      <MessageView />
    )
  }
}

export default App;
