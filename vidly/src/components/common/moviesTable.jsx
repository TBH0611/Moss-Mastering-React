import React, { Component } from 'react';
import Like from './like';

const MoviesTable = props => {
    const {movies, onDelete, onLike } = props;
    return (
        <table border="1" width="60%" className="table">
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
                                                                <td><button className="btn btn-danger btn-small" onClick={() => onDelete(movie)}>Delete</button></td>
                                                                <td><Like liked={movie.liked} onClick={() => onLike(movie)}/></td>
                                                                </tr>)}
        </tbody>                                        
        </table>    
            
    );
}

export default MoviesTable;