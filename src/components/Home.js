import React, { Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import Counter from './../components/Counter'
import Checkbox from './../components/Checkbox'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            search: '',
            filtered: []
        }
    }

    componentDidMount() {
        this.setState({
            data: JSON.parse(localStorage.getItem('data')) || [],
            filtered: JSON.parse(localStorage.getItem('data')) || []
        })
    }

    onChange = ({target}) => {
        const { data } = this.state;
        let {value} = target;
        let currentList = [];
        let filteredList = [];

        if (value !== "") {
            currentList = data;
            filteredList = currentList.filter(({name})=>{
                const itemNorm = name.toLowerCase();
                const filterNorm = value.toLowerCase();
                return itemNorm.includes(filterNorm);
            });
        } else {
            filteredList = data;
        }
        this.setState({
            search: value,
            filtered: filteredList
        })
    }

    onCheckItem = ({item}) => {
        const { data } = this.state;
        const index = data.indexOf(item);
        if (index >= 0) {
            data[index] = { ...item, check: !item.check };
            this.setState({data: data});
            localStorage.setItem('data', JSON.stringify(data));
        }
    }

    onRemoveItem = (item) => {
        const { data } = this.state;
        const index = data.indexOf(item);
        if (index >= 0) {
            data.splice(index, 1);
            this.setState({data: data});
            localStorage.setItem('data', JSON.stringify(data));
        }
    }

    render(){
        const data = this.state.filtered;
        let { search } = this.state;
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
                <Row>
                    <Col className="search"> 
                        <input type="text" className="form-control" name="search" placeholder="Filtrar pelo nome do item..." value={ search } onChange={ this.onChange }/>
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
                                        <div className="delete" onClick={ () => this.onRemoveItem(item) }>
                                            <i className="mdi mdi-trash-can-outline"></i>
                                        </div>
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