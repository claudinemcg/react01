class Machine extends React.Component {
    render() {
        const arr = [(this.props.s1), (this.props.s2), (this.props.s3)];
        console.log(arr)
        const c1 = arr[Math.floor(Math.random() * arr.length)];
        const c2 = arr[Math.floor(Math.random() * arr.length)];
        const c3 = arr[Math.floor(Math.random() * arr.length)];
        // console.log(this.props);
        // console.log(c1, c2, c3);
        const winner = (c1 === c2) && (c2 === c3);
        // boolean
        const colors = { fontSize: '100px', backgroundColor: 'grey' };
        // inline styling
        let msg;
        if (winner) {
            msg =
                <div className="Machine-win">
                    <h2> YOU WIN</h2>
                    <p style={colors}>{c1} {c2} {c3} </p>
                </div>
        } else {
            msg =
                <div className="Machine-lose">
                    <h2> YOU LOSE </h2>
                    <p style={{ fontSize: '100px' }}>{c1} {c2} {c3} </p>
                </div>
        }
        return (msg);
    }
}
