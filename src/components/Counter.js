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
            <div className="counter">
                <p className="mr-4"><span>{ data.length }</span> Itens</p>
                <p><span>{ lenghtOfYes }</span> Finalizados</p>
            </div>
        );
    }
}