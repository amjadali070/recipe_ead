import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
    <tr>
        <td>{props.Recipe.description}</td>
        <td>{props.Recipe.Ingridents}</td>
        <td>{props.Recipe.Instructions}</td>
        <td>
            <Link to={"/edit/"+props.Recipe._id}>Edit</Link>
        </td>
    </tr>
)

export default class RecipesList extends Component {

    constructor(props) {
        super(props);
        this.state = {Recipes: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/recipes/')
            .then(response => {
                this.setState({ Recipes: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    RecipesList() {
        return this.state.Recipes.map(function(currentRecipe, i){
            return <Recipe Recipe={currentRecipe} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Recipes List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Ingredients</th>
                            <th>Instructions</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.RecipeList() }
                    </tbody>
                </table>
            </div>
        )
    }
}