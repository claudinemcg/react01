class Hello extends React.Component {
    render() {
        //console.log(this.props);
        // props = properties
        let bangs = "!".repeat(this.props.bangs);
        return (
            <div>
                <p>Hi {this.props.to}! Love from {this.props.from}{bangs}</p>
                <img src={this.props.img} />
            </div>
        );
    }
}