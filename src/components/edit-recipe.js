import React, { Component } from 'react';
import axios from 'axios';

export default class EditRecipe extends Component {

    constructor(props) {
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeIngredients = this.onChangeIngredients.bind(this);
        this.onChangeInstructions = this.onChangeInstructions.bind(this);
  
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: '',
            ingredients: '',
            instructions: '',
            
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description: response.data.description,
                    todo_responsible: response.data.ingredients,
                    todo_priority: response.data.instructions
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeTodoDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            ingredients: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            instructions: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            description: this.state.description,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions
           
        };
        console.log(obj);
        axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Recipe</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Ingredients: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.ingredients}
                                onChange={this.onChangeIngredients}
                                />
                    </div>

                    <div className="form-group">
                        <label>Instructions: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.instructions}
                                onChange={this.onChangeInstructions}
                                />
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}