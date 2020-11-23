import React, { Component } from 'react';
import { Table, Badge } from 'reactstrap'
import { Link } from 'react-router-dom'

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

    render(){
        const { data } = this.state;
        return (
            <div>
                <Link className="btn btn-primary mb-3 mt-3" to="/add">Novo Item</Link>
                <Table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Marcado?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{ item.name}</td>
                                    <td>
                                        { item.check ? 
                                            <Badge color='success'>Sim</Badge> :
                                            <Badge color='danger'>Não</Badge>}                                    
                                    </td>
                                </tr>                                
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}