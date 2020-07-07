import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'

class App extends React.Component {
  /*Definindo o construtor*/
  constructor(props){
    super(props);
      this.state={
        items:[],
        currentItem:{
          text:'',
          key:''
        }
      }

      this.handleInput = this.handleInput.bind(this);
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.setUpdate = this.setUpdate.bind(this);
    }
    handleInput(e){
      this.setState({
        currentItem:{
          text: e.target.value,
          key:Date.now()
        }
      })
    }
    /*Definindo a funcao de adicionar*/
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      console.log(newItem);
      if(newItem.text!==""){
        const newItems=[...this.state.items, newItem];
        this.setState({
          items:newItems,
          currentItem:{
            text:'',
            key:''
          }
      })
      }
    }
    /*Definindo a funcao de apagar*/
    deleteItem(key){
      const filteredItems = this.state.items.filter(item =>
        item.key!==key);
        this.setState({
          items:filteredItems
        })
    }
    setUpdate(text, key){
      const items = this.state.items;
      items.map(item =>{
        if(item.key===key){
        item.text=text;
      }
    })
    this.setState({
      items: items
    })
  }

    /*Definindo a aplicacao*/
  render(){
    return (
      <div className="App">
      <header>
        <form id="atividades" onSubmit={this.addItem}>
          <h1>Lista de Atividades</h1>
          <input type="text" placeholder="Digite a atividade"
          value={this.state.currentItem.text}
          onChange={this.handleInput}/>
          <button type="submit">Adicionar</button>
        </form>
      </header>
      <ListItems items = {this.state.items}
      deleteItem ={this.deleteItem}
      setUpdate = {this.setUpdate}>
      </ListItems>
      </div>
    );
  }
}

export default App;
