import React, { Component } from 'react';

class Counter extends Component {
   //Eliminating of the local state because value is passed in as a prop.
    // state = {  
    //     value: this.props.counter.value,
    //     tags: []
    // };

    styles = {
        fontSize: 12,
        fontWeight: "bold"
    };

   //No longer needed as value as passed in as a prop and should be handled at the parenting component, not the controlled component
    // handleIncrement = () => {
    //     this.setState({value: this.state.value + 1});
    // }

    render()
    {
        return (
             <div className="row">
            <div className="col-1">
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col">
                  <button onClick={() => this.props.OnIncrement(this.props.counter)} className="btn btn-secondary btn-lg">+</button>
                    <button onClick={() => this.props.OnDecrement(this.props.counter)}  className="btn btn-secondary btn-lg m-2" disabled={this.props.counter.value === 0 ? "disabled" : ""}>-</button>
                    <button onClick={() => this.props.OnDelete(this.props.counter)} className="btn btn-danger btn-lg">X</button> 
            </div>
            </div>
        )
     
    }

    formatCount(){
        const { value } = this.props.counter;

        return value === 0 ? "Zero" : value;
    }

    getBadgeClasses()
    {
        let classes = "badge m-2 badge-";
        classes +=  this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

}
 
export default Counter;

// handleIncrement = (product) => {
//     console.log(product);
//     this.setState({value: this.state.value + 1});
// }

// return (
//     <React.Fragment>            
//         <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button onClick={() => this.handleIncrement(this.product)} className="btn btn-secondary btn-sm">Increment</button>

//     </React.Fragment>
// );

// product = {
//     id: 3,
//     name: "soccer ball",
//     quantiy: 100
// }

// renderTags(){
//     if(this.state.tags.length === 0) return <p>There is no tag(s)</p>;
//     else
//         return (<ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>);
// }