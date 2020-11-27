import React, { Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import Counter from './../components/Counter'
import Checkbox from './../components/Checkbox'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.setState({
            data: JSON.parse(localStorage.getItem('data')) || []
        })
    }

    onCheckItem = ({item}) => {
        const { data } = this.state;
        const index = data.indexOf(item);
        console.log(index);
        if (index >= 0) {
            data[index] = { ...item, check: !item.check };
            this.setState({data: data});
            localStorage.setItem('data', JSON.stringify(data));
        }
    }

    render(){
        const { data } = this.state;
        return (
            <div>
                <Row className="text-center">
                    <Col>
                        <h1 className="title mt-4" >Checklist</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center"> 
                        <Counter data={ data }/>                   
                    </Col>
                </Row>
                <Link className="btn btn-primary mb-3 mt-3" to="/add">Novo Item</Link>
                <Row>
                    <Col>
                        <ListGroup>
                            {
                                data.map((item, index) => (
                                    <ListGroupItem key={ index }>
                                        <Checkbox label={ item.name } item={ item } onChange={ this.onCheckItem }/> 
                                    </ListGroupItem>
                                ))
                            }                                    
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        );
    }
}