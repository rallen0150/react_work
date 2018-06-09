import React, { Component } from "react";
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
    this.addItems = this.addItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItems(x) {
    if (this._inputElement.value !== "") {
      var date = new Date();
      var newItem = {
        text: this._inputElement.value,
        key: (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    x.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItems}>
            <input ref={(a => this._inputElement = a)} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
          <div>
            <TodoItems entries={this.state.items} delete={this.deleteItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
