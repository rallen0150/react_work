import React, { Component } from 'react';

class MessageView extends Component {
  render() {
    return(
      <div class="container">
        <div class="from">
          <span class="label">From: </span>
          <span class="value">Jon Doe</span>
        </div>
        <div class="status">
          <span class="label">Status: </span>
          <span class="value"> Unread</span>
        </div>
        <div class="message">
          <span class="label">Message: </span>
          <span class="value">My first Message!</span>
        </div>
      </div>
    )
  }
}

export default MessageView;
