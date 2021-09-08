class Friend extends React.Component {
    render() {
        const { name, hobbies } = this.props // this.props.name, this.props.hobbies
        return (
            <div>
                <h1> {name}</h1>
                <ul>
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>

            </div>
        )
    }
}