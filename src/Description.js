import React from 'react';

class Description extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <p>{this.props.description}</p>
        );
    }
}

export default Description;
