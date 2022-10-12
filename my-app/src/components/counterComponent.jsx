import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
        imageURL: 'https://picsum.photos/200'
     } 
    render() { 
        return (
            <div>
                <span className="badge badge-primary">
                    {this.formatCount()}
                </span>
                <button>Increement</button>
            </div>
        );
    }

    formatCount(){
        let {count}=this.state;
        const x= <h1>Zero</h1>
        return count===0?x: count;
    }
}
 
export default Counter;


