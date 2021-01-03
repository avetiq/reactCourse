import React from 'react';
import Price from './Price';
import Name from './Name';
import Description from './Description';

//if we write import ... from 'Price'  this will mean that our programm will go into node modules folder
//and will try to find into it Price named folder 

class Product extends React.Component{

    render(){
        return(
            <div>
            <Price price={this.props.price}/>
            <Name name={this.props.name}/>
            <Description description={this.props.description}/>
            </div>
        );
    }
}

export default Product; 