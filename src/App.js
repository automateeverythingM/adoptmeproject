import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { DetailsWithErrorBoundaries } from "./Details";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";

export default function App() {
    const themeHook = useState("purple");
    return (
        <React.StrictMode>
            <ThemeContext.Provider value={themeHook}>
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
            </ThemeContext.Provider>
        </React.StrictMode>
    );
}

render(<App />, document.getElementById("root"));
