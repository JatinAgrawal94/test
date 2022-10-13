import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
        tags:['tag1','tag2','tag3']
     } 

    //  constructor(){
    //     this.handleIncreement=this.handleIncreement.bind(this);
    //  }

     handleIncreement=()=>{
        this.setState({count:this.state.count+1});
     }

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button onClick={this.handleIncreement} className='btn btn-secondary btn-sm'>Increement</button>
                {/* <ul>
                    {this.state.tags.map(tag=> <li key={tag}>{ tag }</li> )}
                </ul> */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        let {count}=this.state;
        const x= <h1>Zero</h1>
        return count===0?x: count;
    }
}
 
export default Counter;


