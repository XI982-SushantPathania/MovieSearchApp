import React from "react";
import Grid from '@material-ui/core/Grid';
import styles from './Movie.css'



const DEFAULT_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = (props) => {
    const { movies } = props

    return (
        <div className="movie">
            {movies.Response == "True" ?
                <Grid container spacing={2}>
                    {movies.Search.map((movies, index) => {
                        const poster =
                            movies.Poster === "N/A" ? DEFAULT_IMAGE : movies.Poster;
                        return (
                            <>
                                <Grid item xs={4} md={3} key={index}>
                                    <p className={styles.title}>{movies.Title}</p>
                                    <div>
                                        <img
                                            width="200"
                                            alt={`The movie titled: ${movies.Title}`}
                                            src={poster}
                                        />
                                    </div>
                                    <p>({movies.Year})</p>
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
                : ("No movies found!!")}
        </div>

    );
};

export default Movie;

