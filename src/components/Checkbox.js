import React, { Component } from 'react'

export default class Checkbox extends Component {

    constructor(props){
        super(props);
    }

    onCheck = () => {
        const { onChange, item } = this.props;
        onChange({item: item})
    } 

    render(){
        const { item, label } = this.props;
        let cssClass = "pretty p-switch";
        let stateClass = "state"
        if ( item.check ) {
            cssClass += " p-fill";
            stateClass += " p-success" 
        } 
        return(
            <div className={ cssClass }>
                <input type="checkbox" checked={ item.check } onChange={ this.onCheck }/>
                <div className={stateClass}>
                    <label>{ label }</label>
                </div>
            </div>
        )
    }
}