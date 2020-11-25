import React, { Component } from 'react';
import { Table, Badge } from 'reactstrap'
import { Link } from 'react-router-dom'
import Counter from './../components/Counter'

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

    onCheckItem = (item) => {
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
                                            <Badge color='success' style={{ cursor: "pointer"}} onClick={ () => this.onCheckItem(item)}>Sim</Badge> :
                                            <Badge color='danger' style={{ cursor: "pointer"}}  onClick={ () => this.onCheckItem(item)}>Não</Badge>}                                    
                                    </td>
                                </tr>                                
                            ))
                        }
                    </tbody>
                </Table>
                <div className="container">
                    <hr/>
                    <Counter data={ data }/>
                </div>
            </div>
        );
    }
}