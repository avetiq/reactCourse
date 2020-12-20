import React from 'react';

class Price extends React.Component{
    constructor(props){
        //Component parent class's constructer is props
        //in this way we initialize Component's class this.props
        //that inherited in Price class, and in render() with this.props 
        //we can use this.props value
        super(props);
    }

    render(){
        return(
            <p>{this.props.price}</p>
        );
    }
}

export default Price;
