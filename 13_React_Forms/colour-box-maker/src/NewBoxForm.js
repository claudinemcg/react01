import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {
    constructor(props) {
        super(props)
        this.state = { height: '', width: '', color: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = { ...this.state, id: uuidv4() } // add in id as well
        // this.props.addBox(this.state)
        this.props.addBox(newBox)
        this.setState({ height: '', width: '', color: '' })
    }


    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='height'>Height:</label>
                <input
                    type='text'
                    id='height'
                    name='height'
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <label htmlFor='width'>Width:</label>
                <input
                    type='text'
                    id='width'
                    name='width'
                    value={this.state.width}
                    onChange={this.handleChange}
                />
                <label htmlFor='color'>Color:</label>
                <input
                    type='text'
                    id='color'
                    name='color'
                    value={this.state.color}
                    onChange={this.handleChange}
                />
                <button>Create Box</button>
            </form>
            </div>
        )
    }
}
export default NewBoxForm;
