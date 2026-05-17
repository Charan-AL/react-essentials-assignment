import { useState } from "react";

import Portfolio from "./components/portfolio/Portfolio";
import MovieExplorer from "./components/movies/MovieExplorer";

import "./App.css";

function App() {

    const [activePage, setActivePage] =
        useState("portfolio");

    return (

        <div className="app-container">

            <div className="nav-buttons">

                <button
                    className={
                        activePage === "portfolio"
                            ? "active-btn"
                            : ""
                    }
                    onClick={() =>
                        setActivePage("portfolio")
                    }
                >
                    Portfolio
                </button>

                <button
                    className={
                        activePage === "movies"
                            ? "active-btn"
                            : ""
                    }
                    onClick={() =>
                        setActivePage("movies")
                    }
                >
                    Movies
                </button>

            </div>

            {activePage === "portfolio" ? (
                <Portfolio />
            ) : (
                <MovieExplorer />
            )}

        </div>
    );
}

export default App;