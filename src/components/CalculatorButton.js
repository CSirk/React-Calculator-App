import React from 'react';

class CalculatorButton extends React.Component {
    render() {
        return(
            <button>{this.props.name}</button>
        );
    }
}

export default CalculatorButton;