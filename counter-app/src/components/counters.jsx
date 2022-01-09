import React, { Component } from 'react';
import Counter from './counter';

class  Counters extends React.Component {
    render() { 
        return (
            <div>
            <button 
                onClick={this.props.OnReset}
                className="btn btn-small btn-primary m-2">Reset
            </button>
            {this.props.counters.map(counter => <div><Counter key={counter.id} 
                                                                                                OnDelete={() => this.props.OnDelete(counter)}  
                                                                                                OnIncrement={() => this.props.OnIncrement(counter)}
                                                                                                counter={counter} /><br/></div>)}
            </div>
        ) 
    };
}
 export default Counters;