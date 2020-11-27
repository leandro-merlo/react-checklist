import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import Checkbox from './../components/Checkbox'

export default class Insert extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            check: false,
            data: []
        }
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('data'))
        this.setState({
            data: data
        })
    }

    onChange = ({ target, item }) => {
        let value, name;
        if (target) {
            value = target.type === 'checkbox' ? target.checked : target.value;
            name = target.name;
    
        } else {
            value = item.check;
            name = 'check';    
        }     
        this.setState({
            [name]: value
        });
    }

    onClick = async (event) => {
        let { data, name, check } = this.state;
        let id = this._generateRandomId();
        data.push({ id, name, check });
        await this.setState({
            data: data
        });
        console.log(this.state.data);
        localStorage.setItem('data', JSON.stringify(this.state.data));
        this.props.history.push('/');
    }

    _generateRandomId = () => {
        return Math.random().toString(24).substr(2, 10);
    }

    render(){
        let { name, check } = this.state;
        check = check ? 'true' : 'false'
        return (
            <div>
                <h2 className="title mt-4">Novo Item</h2>
                <div>
                <Card>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">Nome</Label>
                                <Input id="name" name="name" placeholder="Digite o nome do item" value={ name } onChange={ this.onChange }/>
                            </FormGroup>
                            <FormGroup check>
                                <Label for="check" check>
                                    <Checkbox label="Finalizado" item={ { check: check === 'true' } } onChange={ this.onChange }/> 
                                </Label>
                            </FormGroup>
                            <Row>
                                <Col className="col-sm-12">
                                    <FormGroup className="float-right">
                                        <Button color="primary" onClick={this.onClick}>Adicionar</Button>
                                        <Link to="/" className="btn btn-secondary ml-2">Voltar para listagem</Link>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>                        
                    </CardBody>
                </Card>
                </div>
            </div>
        );
    }
}