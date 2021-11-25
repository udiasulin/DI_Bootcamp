import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCard from './components/BootstrapCard';
import PrintHello from './components/PrintHello';
import Jumbotron from './components/Jumbotron';

// exercise1 
// function PrintHello() {
//     return (
//         <h1>I Love React</h1>
//     );
// }

const App = () => {
    const singerData = [
        {
            title: 'Bob Dylan',
            imageUrl: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
            buttonLabel: 'Go to wikipedia',
            buttonUrl: 'https://en.wikipedia.org/wiki/Bob_Dylan',
            description: 'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.'
        },
        {
            title: 'McCartney',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg',
            buttonLabel: 'Go to Wikipedia',
            buttonUrl: 'https://en.wikipedia.org/wiki/Paul_McCartney',
            description: 'Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.'
        }
    ]
    return (
        <>
            {/* exercise2 */}
            <PrintHello />

            {/* //exercise3 */}
            <BootstrapCard data={singerData} />
            
            {/* //exercise4 */}
            <Jumbotron
                title="Welcome to react"
                description="React is the most popular rendering library in the world"
                buttonLabel="Go to the official website"
                buttonURL="https://reactjs.org/"
            />
        </>
    )
}
export default App;
