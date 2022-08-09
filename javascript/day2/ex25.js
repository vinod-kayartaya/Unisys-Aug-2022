movie = {
    print: function () {
        console.log(
            '"' + this.Title + '" was released in the year ' + this.Year
        );
    },
};

function printMovieWithYear() {
    console.log(`"${this.Title}" - ${this.Year}`);
}

let movies = [
    {
        Title: 'Kill Bill: Vol. 1',
        Year: '2003',
        imdbID: 'tt0266697',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'Kill Bill: Vol. 2',
        Year: '2004',
        imdbID: 'tt0378194',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'To Kill a Mockingbird',
        Year: '1962',
        imdbID: 'tt0056592',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNmVmYzcwNzMtMWM1NS00MWIyLThlMDEtYzUwZDgzODE1NmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'Sin City: A Dame to Kill For',
        Year: '2014',
        imdbID: 'tt0458481',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjA5ODYwNjgxMF5BMl5BanBnXkFtZTgwMTcwNzAyMjE@._V1_SX300.jpg',
    },
    {
        Title: 'A Time to Kill',
        Year: '1996',
        imdbID: 'tt0117913',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOWExZTg4ZWYtOTQxMi00YWZkLTkxYzgtOTg1MTUxNzNiNDcxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    },
    {
        Title: 'Licence to Kill',
        Year: '1989',
        imdbID: 'tt0097742',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjA2ODZjOWEtMWJjNy00MWYzLTk0MGItMmE5ODBlYjI4MDY3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    },
    {
        Title: 'A View to a Kill',
        Year: '1985',
        imdbID: 'tt0090264',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZmFlNmNjMzYtNWUwNS00MzRmLWJhZDktNWE3MGY3ZjdkOTI2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
    },
    {
        Title: '3 Days to Kill',
        Year: '2014',
        imdbID: 'tt2172934',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMzM0MjE0Nzg1N15BMl5BanBnXkFtZTgwODA4ODE4MDE@._V1_SX300.jpg',
    },
    {
        Title: 'Righteous Kill',
        Year: '2008',
        imdbID: 'tt1034331',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTYwMjg3MjY3OV5BMl5BanBnXkFtZTcwNTc4MDU3MQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Generation Kill',
        Year: '2008',
        imdbID: 'tt0995832',
        Type: 'series',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTM2NjAxOTQzNl5BMl5BanBnXkFtZTcwMjk4NzU3MQ@@._V1_SX300.jpg',
    },
];

// for (let i = 0; i < movies.length; i++) {
//     movie.print.apply(movies[i]);
// }

// movies.forEach((m) => movie.print.apply(m));
// movies.forEach((m) => movie.print.call(m));
movies.forEach((m) => {
    // unlike the apply() or call() which invoke the actual method,
    // the bind() returns a new method bound with the context object, which
    // then has to be called manually.

    // let fn = printMovieWithYear.bind(m);
    // fn();
    // printMovieWithYear.bind(m)();
    movie.print.bind(m)();
});
