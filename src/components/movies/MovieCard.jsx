function MovieCard({
    movie,
    isFavorite,
    toggleFavorite
}) {

    return (

        <div className="movie-card">

            <div>

                <h3>
                    {movie.title}
                </h3>

                <p>
                    {movie.year} • {movie.genre}
                </p>

                <span className="rating">
                    ⭐ {movie.rating}
                </span>

            </div>

            <button
                className={`favorite-btn ${
                    isFavorite ? "favorited" : ""
                }`}
                onClick={() =>
                    toggleFavorite(movie.id)
                }
            >

                {isFavorite
                    ? "❤️ Favorited"
                    : "🤍 Favorite"}

            </button>

        </div>
    );
}

export default MovieCard;