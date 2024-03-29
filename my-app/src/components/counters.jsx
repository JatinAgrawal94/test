import React,{Component} from 'react';
import Counter from "./counterComponent";

class Counters extends Component {
    state = {  
        counters:[
            {
                id:1,
                value:4
            },
            {
                id:2,
                value:0
            },
            {
                id:3,
                value:0
            },
            {
                id:4,
                value:0
            },   
        ]
    }
    
    handleDelete=()=>{
        console.log('Event Handler Called');
    }
    
    render() { 
     
        return (
            <div>
                {this.state.counters.map(counter=> <Counter key={counter.id} onDelete={()=>this.setState({counters:this.state.counters.filter(e=>e.id!==counter.id)})} counter={counter} selected>
                </Counter>
                )}
            </div>
        );
    }
}
 
export default Counters ;

