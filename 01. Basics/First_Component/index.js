class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
            </div>
        );
    }
}

// same as above
// function Hello() {
//     return (
//         <div>
//             <h1>Hello there!</h1>
//             <h1>Hello there!</h1>
//             <h1>Hello there!</h1>
//         </div>
//     );
// }
ReactDOM.render(<Hello />, document.getElementById('root'));
// root is in the index file