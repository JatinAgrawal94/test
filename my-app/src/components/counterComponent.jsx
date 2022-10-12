import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:1,
        imageURL: 'https://picsum.photos/200'
     } 
    render() { 
        return (
            <div>
                <img src={this.state.imageURL} alt="" />
                <span>
                    {this.formatCount()}
                </span>
                <button>Increement</button>
            </div>
        );
    }

    formatCount(){
        let {count}=this.state.count;
        const x= <h1>Zero</h1>
        return count===0?x: count;
    }
}
 
export default Counter;


