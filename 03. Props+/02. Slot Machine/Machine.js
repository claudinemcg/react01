class Machine extends React.Component {
    render() {
        const arr = [(this.props.s1), (this.props.s2), (this.props.s3)];
        console.log(arr)
        const c1 = arr[Math.floor(Math.random() * arr.length)];
        const c2 = arr[Math.floor(Math.random() * arr.length)];
        const c3 = arr[Math.floor(Math.random() * arr.length)];
        // console.log(this.props);
        // console.log(c1, c2, c3);
        const winner = (c1 === c2) && (c2 === c3)
        // boolean

        let msg;
        if (winner) {
            msg =
                <div>
                    <h2> YOU WIN</h2>
                    <h2>{c1} {c2} {c3} </h2>
                </div>
        } else {
            msg =
                <div>
                    <h2> YOU LOSE </h2>
                    <h2>{c1} {c2} {c3} </h2>
                </div>
        }
        return (msg);
    }
}


