import React, { Component } from 'react';
import { Col } from 'reactstrap';

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render(){
        return (
            <div className="text-center">
                <Col>Copyright &copy; Leandro Manzano Merlo</Col>
            </div>
        );
    }
}