import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundaries extends React.Component {
    state = { hasError: false, redirect: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error(error, info);
    }

    componentDidUpdate() {
        if (this.state.hasError) {
            setTimeout(() => {
                this.setState({ redirect: true }); //? or you can do navigate('/')
            }, 5000);
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
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

export default ErrorBoundaries;
