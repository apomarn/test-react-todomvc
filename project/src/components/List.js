import React, { Component } from 'react'
import '../App.css'

class List extends Component {
  decreaseCount(id) {
    this.props.decreaseCount(id)
  }

  render() {
    const eachItem = this.props.eachItem
    console.log(eachItem)

    return (
      <div>
        {eachItem.map(item => {
          return (
            <div key={item.id} className='eachcontainer'>
              <p id='div'>
                {item.value}

                <button id='button' onClick={() => this.decreaseCount(item.id)}>
                  X
                </button>
              </p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default List
