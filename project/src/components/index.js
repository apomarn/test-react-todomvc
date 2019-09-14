import React, { Component } from 'react'
import List from './List'
import '../App.css'

class Challenge extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newItem: '',
      list: [],
      count: 0
    }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.incrementCount = this.incrementCount.bind(this)
    this.decreaseCount = this.decreaseCount.bind(this)
  }

  addItem(e) {
    const newItem = {
      id: Date.now(),
      value: document.getElementById('input').value.trim()
    }

    const newList = [...this.state.list]

    newList.push(newItem)

    this.setState({
      list: newList
    })

    document.getElementById('form').reset()

    e.preventDefault()
  }

  deleteItem(id) {
    const list = [...this.state.list]
    const updatedList = list.filter(item => item.id !== id)

    this.setState({
      list: updatedList
    })
  }

  incrementCount(e) {
    const newCount = this.state.count + 1

    this.setState({
      count: newCount
    })

    this.addItem(e)

    e.preventDefault()
  }

  decreaseCount(id) {
    const newCount = this.state.count - 1

    this.setState({
      count: newCount
    })

    this.deleteItem(id)
  }

  render() {
    return (
      <div className='maincontainer'>
        <div className='headercontainer'>
          <h3>To-Do</h3>
        </div>
        <form id='form'>
          <input type='text' autoFocus placeholder='New' id='input'></input>
          <button type='submit' onClick={this.incrementCount}>
            +
          </button>
        </form>
        <div className='wrapper'>
          <List eachItem={this.state.list} decreaseCount={this.decreaseCount} />
        </div>
        <h3>Count: {this.state.count}</h3>
      </div>
    )
  }
}

export default Challenge
