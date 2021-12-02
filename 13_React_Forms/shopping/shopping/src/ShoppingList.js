import React, { Component } from 'react'
import ShoppingListForm from './ShoppingListForm';
import { v4 as uuidv4 } from 'uuid';

class ShoppingList extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: [
                {name: "Milk", qty: "2 litre", id: uuidv4()},
                { name: "Eggs", qty: "1 pack", id: uuidv4()}
            ]
        };
        this.addItem = this.addItem.bind(this);
    }
    
    addItem(item) { // adds item object e.g. {name:"...", qty:""}
        let newItem = {...item, id: uuidv4()}
        this.setState(state => ({ //state is the old state
            items: [...state.items, newItem] // old items in state, new item
        }))
    }
    renderItems(){ //method for rendering items
        return(
            <ul>
                {this.state.items.map(item =>(
                  <li key={item.id}>
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