import React, { Component } from 'react';
import Movies from '../movies';


const Like = (props) => {
    let heartClass = props.liked === true ? "fa fa-heart" : "fa fa-heart-o";
    
    return(
         <i className={heartClass} aria-hidden="true" style={{ cursor: "pointer"}} onClick={props.onClick}></i>
    );
}
 
export default Like;