// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(function (movie) {
        return movie.director;})
    //return directors;
    //bonus no repeat:
    let cleanDirectors = directors.filter(function (dire,index) {
    return directors.indexOf(dire) === index;
    });
    return cleanDirectors;
}
//console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let generoDrama = moviesArray.filter((movie)=> movie.genre.includes('Drama'));
    let dramaSteven = generoDrama.filter((movie) => movie.director === 'Steven Spielberg');
    if (dramaSteven.length === 0) {
        return 0;
    }
    if (dramaSteven.length > 0) {
        return dramaSteven.length;
    }
    
}
console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    let sum = moviesArray.reduce((accumulator, movie) => {
        if (!movie.score) {
            return accumulator + 0};
        return (accumulator + movie.score);
        },0);
return parseFloat((sum/moviesArray.length).toFixed(2));
}

console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));
    result = scoresAverage(dramaMovies);
    return result;
}
console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
//  
  let yearArray = moviesArray.map((movies) => (movies));  
let yearArrayOrdered = yearArray.sort((a,b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    })
    return yearArrayOrdered;
}
console.log(orderByYear(movies))
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titleArray = moviesArray.map((movies) => (movies.title));
    let titleArrayOrdered = titleArray.sort((a, b) => a.localeCompare(b));
    return titleArrayOrdered.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let minArray = moviesArray.map((movies) => {
        let time = movies.duration;
        let hours = 0;
        let min = 0;
        if (time.includes('h') && time.includes('min')) {
            hours = parseInt(time[0]);
            min = parseInt(time[3] + time[4]);
        }
        if (time.includes('h') && !time.includes('min')) {
            hours = parseInt(time[0]);
        }
        if (!time.includes('h') && time.includes('min')) {
            min = parseInt(time[0] + time[1]);
        }
        let totalMin = (hours * 60) + min;
        return {...movies, duration: totalMin};
    })
    return minArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }
    let yearArray = moviesArray.map((movies) => movies.year);
    let yearArrayOrdered = yearArray.sort((a, b) => a - b);
    let yearArrayNoRepeat = yearArrayOrdered.filter((year, index) => yearArrayOrdered.indexOf(year) === index);
    let yearAvg = yearArrayNoRepeat.map((year) => {
        let yearMovies = moviesArray.filter((movies) => movies.year === year);
        return {year: year, avg: scoresAverage(yearMovies)};
    })
    let bestYear = yearAvg.sort((a, b) => b.avg - a.avg);
    return `The best year was ${bestYear[0].year} with an average score of ${bestYear[0].avg}!!!`;
}
