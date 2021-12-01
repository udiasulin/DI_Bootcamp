import React from "react";

class ErrorBoundery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
            hasError: false

        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

     componentDidCatch(error, errorInfo) {
         console.log(error, errorInfo)
    }


    render() {
        if (this.state.hasError) {
            return (
                <>
                    <h1>An Error As Ocurred</h1>
                </>
            )
        }

        return this.props.children;
    }
}


export default ErrorBoundery
