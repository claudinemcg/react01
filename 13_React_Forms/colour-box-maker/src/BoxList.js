import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props){
        super(props)
        this.state = {boxes: []};
        // this.state={boxes:[{width: 10, height: 20, color: 'orange'}]}; 
        // add one in to see if it's working
        this.addBox = this.addBox.bind(this);
        this.remove = this.remove.bind(this);
    }
    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
            // create a new array of boxes EXCEPT for the box that has the same id passed in
        });
    }
    
    addBox(newBox){
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }

    

    render() {
    const boxes = this.state.boxes.map(box =>(
        <Box 
            key={box.id} 
            id={box.id} // can't use key so need to create id so we can remove the box
            width={box.width} 
            height={box.height} 
            color={box.color}  
            removeBox={this.remove}
            //jsx
        />
    ));
    return (
        <div>
            <h1>Colour Box Maker Thingy</h1>
            <NewBoxForm addBox={this.addBox}/>
            {boxes}
        </div>
        )
    }
}

export default BoxList;
