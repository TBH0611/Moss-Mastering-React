import React, { Component } from 'react';

const ListGroup = (props) => {
    const {items, textProperty, valueProperty, onItemSelected, selectedItem} = props;

    return (items.map((item) => <ul className="list-group"><li key={item[valueProperty]} 
                                                                                                    className={item === selectedItem ? "list-group-item active" : "list-group-item"} 
                                                                                                    onClick={() => onItemSelected(item)}>{item[textProperty]}</li></ul>));

} 

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}
export default ListGroup;