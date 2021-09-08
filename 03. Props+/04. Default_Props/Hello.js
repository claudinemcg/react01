class Hello extends React.Component {
    static defaultProps = {
        from: 'Anonymous',
        bangs: 1
    } // if from missing will put in Anonymous
    render() {
        //console.log(this.props);
        // props = properties
        let bangs = "!".repeat(this.props.bangs);
        return (
            <div>
                <p>Hi {this.props.to}! from {this.props.from}{bangs}</p>
            </div>
        );
    }
}
