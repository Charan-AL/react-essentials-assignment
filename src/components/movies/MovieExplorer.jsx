import { useState, useMemo } from "react";

import "./MovieExplorer.css";

import moviesData from "./moviesData";

import MovieCard from "./MovieCard";

function MovieExplorer() {

    const [searchTerm, setSearchTerm] =
        useState("");

    const [favorites, setFavorites] =
        useState([]);

    const filteredMovies = useMemo(() => {

        return moviesData.filter((movie) =>

            movie.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );

    }, [searchTerm]);

    const toggleFavorite = (id) => {

        setFavorites((prev) =>

            prev.includes(id)
                ? prev.filter((movieId) =>
                    movieId !== id
                  )
                : [...prev, id]
        );
    };

    const favoriteMovies = moviesData.filter(
        (movie) =>
            favorites.includes(movie.id)
    );

    return (

        <div className="movie-explorer">

            <h1>Movie Explorer</h1>

            <p>
                Search, filter and favorite movies.
            </p>

            <div className="search-container">

                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }
                />

                <button
                    onClick={() =>
                        setSearchTerm("")
                    }
                >
                    Reset
                </button>

            </div>

            {!searchTerm && (
                <p className="message">
                    Start typing to search movies.
                </p>
            )}

            {searchTerm &&
                filteredMovies.length === 0 && (
                    <p className="message">
                        No movies found.
                    </p>
                )
            }

            {filteredMovies.length > 0 && (

                <div className="movies-section">

                    <div>

                        <h2>
                            Matching Movies
                        </h2>

                        {filteredMovies.map((movie) => (

                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                isFavorite={
                                    favorites.includes(movie.id)
                                }
                                toggleFavorite={toggleFavorite}
                            />

                        ))}

                    </div>

                    <div className="favorites-section">

                        <h2>
                            Favorite Movies
                        </h2>

                        {favoriteMovies.length > 0 ? (

                            favoriteMovies.map((movie) => (

                                <p key={movie.id}>
                                    ❤️ {movie.title}
                                </p>

                            ))

                        ) : (

                            <p>
                                No favorite movies yet.
                            </p>

                        )}

                    </div>

                </div>

            )}

        </div>
    );
}

export default MovieExplorer;