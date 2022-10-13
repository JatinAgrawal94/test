import React, { Component } from 'react';

class valueer extends Component {
    state = { 
        value:this.props.counter.value,
        // tags:['tag1','tag2','tag3']
     } 

     handleIncreement=()=>{
        this.setState({value:this.state.value+1});
     }
     
    render() {    
        return (
            <div>
                
                <h4>Counter #{this.props.counter.id}</h4>
                <span className={this.getBadgeClasses()}>
                    {this.formatvalue()}
                </span>
                <button onClick={()=>this.setState({value:this.state.value+1})} className='btn btn-secondary btn-sm'>Increement</button>
                <button onClick={this.props.counter.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatvalue(){
        let {value}=this.state;
        const x= <h1>Zero</h1>
        return value===0?x: value;
    }
}
 
export default valueer;


