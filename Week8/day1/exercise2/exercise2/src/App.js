
import './App.css';

function App() {
    const myelement = <h1>I Love JSX!</h1>;
    const sum = 5 + 5;
    const header = <h1>I am  a header</h1>;
    const headerto = <h1>I am  a header too</h1>;
    const object = {
        first_name: 'Bob',
        last_name: 'Dylan'
    };

    const list_item = <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>;

    // const animals = ['Horse', 'Turtle', 'Elephant', 'Monkey'];
    const animals = [{label: 'Horse'},{label: 'Turtle'},{label: 'Elephant'},{label: 'Monkey'}];
    return (
        <div>
            {myelement}
            <h1>React is {sum} times better with JSX</h1>
            {header}
            {headerto}
            {list_item}
            <input type="text" placeholder="input" />
            <p>My name is {object.first_name}</p>
            <p>My last name is {object.last_name}</p>
            {
                animals.map((item, key) => (
                    <ul key={key}>
                        <li>{item.label}</li>
                    </ul>
                ))

            }
        </div>
    );
}

export default App;
