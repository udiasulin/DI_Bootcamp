import './App.css';
import Car from './components/Car';
import Phone from './components/Phone';

function App() {
    const carinfo = { name: "Ford", model: "Mustang" };
    return (
        <>
            {/* <Car info={carinfo} /> */}
            <Phone />
        </>
    );
}

export default App;
