import React, { Component } from 'react'

class ShoppingListForm extends Component {
    constructor(props){ //added constructor to initailise state
        super(props)
        this.state={name:"", qty:""} // used to manage form
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addItem(this.state) //add in what we have in state 
        this.setState({name:"", qty:""}) //clear form
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value // updating state so name and qty are in sync
        })
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input 
                        id="name" //for label
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        
                    />
                    <label htmlFor="qty">Qty</label>
                    <input
                        type="text"
                        name="qty"
                        value={this.state.qty}
                        onChange={this.handleChange}
                    />
                    <button>Add to List</button>
                </form>
            </div>
        )
    }
}

export default ShoppingListForm;