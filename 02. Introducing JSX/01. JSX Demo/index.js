function getMood() {
    const moods = ['happy', 'sad', 'annoyed', 'delighted', 'excited'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
    render() {
        return (
            <h1>My current mood is: {getMood()}</h1>
        );
    }
}
// class JSXDemo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>My Image</h1>
//                 <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80" />
//             </div>
//         );
//     }
// }


// class Hello extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello there!</h1>
//                 <h1>Hello there!</h1>
//                 <h1>Hello there!</h1>
//             </div>
//         );
//     }
// }

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
