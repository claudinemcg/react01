function getNum() {
    return Math.floor(Math.random() * 10) + 1;
    // returns number 1 - 10
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7) {
            msg =
                <div>
                    <h2>CONGRATS YOU WIN!</h2>
                    <img src="https://media0.giphy.com/media/3ornjXIIShZ2MgyyHu/giphy.gif" />
                </div>
        } else {
            msg = <h2>BAD LUCK YOU LOSE!</h2>
        }
        return (
            <div>
                <h1> Your number is: {num} </h1>
                {msg}
            </div>
        );
    }
}
