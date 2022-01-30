import React, { Component } from 'react';
import Counter from './counter';

class  Counters extends React.Component {
    render() { 
        const {OnReset, OnDelete, OnIncrement, OnDecrement} = this.props;
        return (
            <div>
            <button 
                onClick={OnReset}
                className="btn btn-small btn-primary m-2">Reset
            </button>
            {this.props.counters.map(counter => <div><Counter key={counter.id} 
                                                                                    OnDelete={() => OnDelete(counter)}  
                                                                                    OnIncrement={() => OnIncrement(counter)}
                                                                                    OnDecrement={() => OnDecrement(counter)}
                                                                                    counter={counter} /><br/></div>)}
            </div>
        ) 
    };
}
 export default Counters;