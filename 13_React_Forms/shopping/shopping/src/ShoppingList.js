import React, { Component } from 'react'
import ShoppingListForm from './ShoppingListForm';

class ShoppingList extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: [
                {name: "Milk", qty: "2 litres"},
                {name: "Eggs", qty: "1 pack"}
            ]
        };
        this.addItem = this.addItem.bind(this);
    }
    
    addItem(item) { // adds item object e.g. {name:"...", qty:""}
        this.setState(state => ({ //state is the old state
            items: [...state.items, item] // old items in state, new item
        }))
    }
    renderItems(){ //method for rendering items
        return(
            <ul>
                {this.state.items.map(item =>(
                  <li>
                    {item.name}: {item.qty}
                  </li>  
                ))}
            </ul>
        );
    }

    render(){
        return(
            <div>
                <h1>Shopping List</h1>
                {this.renderItems()}
                <ShoppingListForm addItem={this.addItem}/>
            </div>
        )
    }
}
export default ShoppingList;