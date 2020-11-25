import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

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

    onChange = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
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
    }

    _generateRandomId = () => {
        return Math.random().toString(24).substr(2, 10);
    }

    render(){
        let { name, check } = this.state;
        check = check ? 'true' : 'false'
        return (
            <div>
                <h2>Novo Item</h2>
                <div>
                <Form>
                    <FormGroup>
                        <Label for="name">Nome</Label>
                        <Input id="name" name="name" placeholder="Digite o nome do item" value={ name } onChange={ this.onChange }/>
                    </FormGroup>
                    <FormGroup check>
                        <Label for="check" check>
                            <Input type="checkbox" id="check" name="check" check={ check } onChange={ this.onChange }/>
                             Marcado?
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
                </div>
            </div>
        );
    }
}