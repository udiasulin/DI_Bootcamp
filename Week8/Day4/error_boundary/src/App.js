import './App.css';
import BuggyCounter from './components/BuggyCounter'
import ErrorBoundary from './components/ErrorBoundary'
function App() {
    return (
        <>
            <ErrorBoundary>
                <BuggyCounter />
                <BuggyCounter />
            </ErrorBoundary>

            <ErrorBoundary><BuggyCounter /></ErrorBoundary>
            <ErrorBoundary><BuggyCounter /></ErrorBoundary>

            <BuggyCounter />
        </>
    );
}

export default App;
