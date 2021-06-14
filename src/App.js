import React, { Component } from 'react'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      items:["It1" , "it2"],
      txtContent : ""
    };
  }

  textChange=(e)=>{
    console.log(e.target.value)
    this.setState({txtContent:e.target.value})
  };

  addItem=(e)=>{
    let currentText = this.state.txtContent;
    let currentItems = this.state.items;
    currentItems.push(currentText);
    this.setState({items:currentItems});
  }

  removeItem=(key)=>{
    if(!window.confirm("Are you sure you want to delete this?")){
      return;
    }
    let currentItems = this.state.items;
    currentItems.splice(key,1)
    this.setState({items:currentItems})
  }

  render() {
    var itemsList = this.state.items.map((obj,key)=>{
      return <li key={key}>{obj}<button onClick={()=>{this.removeItem(key)}}>Delete</button></li>
    })

    return (
      <div>
        <input type="text" onChange={this.textChange}/>
        <button onClick={this.addItem}>Add</button>
        <ul>
        {itemsList}
        </ul>
        <p>{this.state.txtContent}</p>
      </div>
    )
  }
}

export default App