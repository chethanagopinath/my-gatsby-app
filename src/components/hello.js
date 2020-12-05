import { navigate } from "gatsby";
import React from "react"

export default class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 1000
        };
        //this.onClick = this.onClick.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
    }
    onClick(){
        navigate("../page-2");
    }

    onIncrement() {
        this.setState({count: this.state.count+1000});
    }

    render(){
        return (
            <div>
                <h1>Hello I'm {this.props.firstName} {this.props.lastName}, what's poppin'? </h1>
                <p>Interested to know more?</p>
                <button onClick={this.onClick}>Click me!</button>
                <br/>
                <div>
                    <h2>How cool am I?</h2>
                    <button onClick={this.onIncrement}>Find out!</button>
                    <h3>{this.state.count} (Waiitt, am I getting cooler by the click? :O)</h3>
                </div>
            </div>
        )
    }


}