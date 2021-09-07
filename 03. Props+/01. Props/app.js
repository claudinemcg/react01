class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="Kids"
                    from="Mammy and Daddy"
                    bangs={4}
                    img="https://images.unsplash.com/photo-1570120090708-6014886db15d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                // num={3}
                // data={[1, 2, 3]}
                // isAdorable
                />
                <Hello
                    to="Mammy and Daddy"
                    from="Kids"
                    bangs={10}
                // num={3}
                // data={[1,2,3]}
                // isAdorable
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));