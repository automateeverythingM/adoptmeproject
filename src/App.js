import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { DetailsWithErrorBoundaries } from "./Details";
import { Router, Link } from "@reach/router";

export default function App() {
    return (
        <React.StrictMode>
            <div>
                <header>
                    <Link to="/">Adopt Me!</Link>
                </header>
                <Router>
                    <SearchParams path="/" />
                    {/* <ErrorBoundaries path="/details/:id">
                        <Details />
                    </ErrorBoundaries> */}
                    <DetailsWithErrorBoundaries path="/details/:id" />
                </Router>
            </div>
        </React.StrictMode>
    );
}

render(<App />, document.getElementById("root"));
