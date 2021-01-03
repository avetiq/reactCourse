import React from 'react';

class Price extends React.Component{
    constructor(props){
        //Component parent class's constructer is props
        //in this way we initialize Component's class this.props
        //that inherited in Price class, and in render() with this.props 
        //we can use this.props value
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            currency: 'USD',
            price: this.props.price,
        };

    }

    handleClick(){
        let money;
        let currency;
        if(this.state.currency === 'USD'){
            money = this.state.price * 500;
            currency = 'AMD'
        }else{
            currency = 'USD'
            money = this.state.price / 500;
        }
         
        return this.setState({price: money, currency: currency});
    }

    render(){
        return(
            <div>
            <p>{this.state.price} {this.state.currency}</p>
            <button onClick={this.handleClick}>Change the currency</button>
            
            </div>
        );
    }
}

export default Price;
