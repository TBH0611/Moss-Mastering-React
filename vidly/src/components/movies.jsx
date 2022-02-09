import react from 'react';
import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';
import {deleteMovie} from '../services/fakeMovieService';
import Like from './common/like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import paginate  from './utils/paginate';
import MoviesTable from './common/moviesTable';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        pageSize: 3, 
        currentPage : 1,
        selectedGenre: null
     }
        
     componentDidMount = () => {
         this.setState({
            movies: getMovies(),
            genres: [{ _id: "", name: "All Genres" }, ...getGenres()]           
        } 
         )
     };

     handleDelete = (movie) => {
         console.log(movie) ;
         const movies = this.state.movies.filter(m =>  m._id !== movie._id);
         this.setState({movies : movies});
    }

    handleLike = (movie) => {
        const index = this.state.movies.indexOf(movie);
        
        const newMovies = [...this.state.movies];

        //instead of 
        //newMovies[index].liked = !(movie.liked);
        //Moss does something like this
        newMovies[index] = {...newMovies[index]};
        newMovies[index].liked = !(newMovies[index].liked);

        this.setState({ movies: newMovies});

    }

    handlePageChange = (page) => {
        //console.log(page);
        //const { pageSize, currentPage, movies: allMovies} = this.state;
        this.setState({currentPage : page}, () =>
        {
            console.log(this.state.currentPage);
        });
       //const movies = paginate(allMovies, currentPage, pageSize);
    }

    handleGenreSelect = (item) => {
        this.setState({selectedGenre: item, currentPage: 1}, () => {
            console.log('selectedGenre', this.state.selectedGenre);
        });

        

    }

    render() { 


        ///const { length: count  } = this.state.movies;
        const { pageSize, currentPage, movies: allMovies, genres, selectedGenre} = this.state;
        
        const filteredMovies = selectedGenre === null || selectedGenre._id === "" ? allMovies :  allMovies.filter(x => x.genre._id === selectedGenre._id);
        const count = filteredMovies.length;

        if (count > 0 )
        {
            const movies = paginate(filteredMovies, currentPage, pageSize);
            return (
                <main className="container">
                    <br/>
                    <div className="row">
                        <div className="col-2">
                            <ListGroup items={genres} onItemSelected={this.handleGenreSelect} selectedItem={selectedGenre}/>
                        </div>
                        <div className="col">
                            <p>Showing {count} movies in the database</p>    
                            <MoviesTable movies={movies} onDelete={this.handleDelete} onLike={this.handleLike}/>
                            {/* <table border="1" width="60%" className="table">
                            <thead>
                            <tr>    
                                <th width="40%">Title</th>
                                <th width="20%">Genre</th>
                                <th width="15%">Stock</th>
                                <th width="15%">Rate</th>
                                <th width="10%"></th>
                                <th width="5%">Like</th>
                            </tr>
                            </thead>
                            <tbody>
                            {movies.map((movie) => <tr key={movie._id}><td>{movie.title}</td>
                                                                                    <td>{movie.genre.name}</td>
                                                                                    <td>{movie.numberInStock}</td>
                                                                                    <td>{movie.dailyRentalRate}</td>
                                                                                    <td><button className="btn btn-danger btn-small" onClick={() => this.handleDelete(movie)}>Delete</button></td>
                                                                                    <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)}/></td>
                                                                                    </tr>)}
                            </tbody>                                        
                            </table> */}
                            <Pagination itemCount={count} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange}/>
                        </div>
                </div>
               
                </main>
             );
         }

   
    
        return <div>There are no movies in the database.</div>
    }
}
 
export default Movies;