class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                    name="Elton"
                    hobbies={['singing', 'dancing']}
                />
                <Friend
                    name="Frida"
                    hobbies={['painting', 'drawing']}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));