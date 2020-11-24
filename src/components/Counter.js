import React, { Component } from 'react';

export default class Counter extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        const { data } = this.props;
        const lenghtOfYes = data.filter(item => item.check === true).length;
        const lenghtOfNo = data.filter(item => item.check === false).length;
        return (
            <div>
                <p>Total: { data.length }</p>
                <p>Total de Sim: { lenghtOfYes }</p>
                <p>Total de Não: { lenghtOfNo }</p>
            </div>
        );
    }
}