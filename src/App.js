import "./App.css";

const testing = {
    firstName: "John",
    lastName: "Lee",
};
const testing2 = {
    hobby: "bowling",
};

function App() {
    const total = { name: testing, details: testing2 };
    return (
        <div className="App">
            <h1 id="page-title">Hello World</h1>
            <Text {...total} />
        </div>
    );
}

function Text(props) {
    return (
        <p>
            {props.name.firstName} likes {props.details.hobby}.
        </p>
    );
}

export default App;
