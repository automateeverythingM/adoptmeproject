import React from "react";
import { Link } from "@reach/router";

class ErrorHandler extends React.Component {
    state = { hasError: false, info: "" };
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div>
                    There was an error with this listening.
                    <Link to="/">Click here</Link> to go to home page or wait
                    for 5 seconds
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorHandler;
