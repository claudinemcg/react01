import React, { Component } from 'react'

class IconList extends Component {
    static defaultProps = {
        options: [
            'surprise',
            'sad-tear',
            'grin-wink',
            'laugh',
            'grimace',
            'frown',
            'dizzy'
        ]
    }
    constructor(props) {
        super(props);
        this.state = { icons: [] }
        this.addIcon = this.addIcon.bind(this);
    }

    addIcon() {
        let idx = Math.floor(Math.random() * this.props.options.length)
        let newIcon = this.props.options[idx];
        this.setState({ icons: [...this.state.icons, newIcon] });
        // put old array into an array with new icon
    }

    render() {
        const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);


        return (
            <div>
                <h1> Icons: {icons} </h1>
                <button onClick={this.addIcon}>Add Icon</button>
            </div>
        )
        // add icons to h1 when you click on button
    }

}

export default IconList;