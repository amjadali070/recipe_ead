import React, { Component } from 'react';

export default class CreateRecipe extends Component {
    constructor(props) {
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeIngredients = this.onChangeIngredients.bind(this);
        this.onChangeIngredients = this.onChangeInstructions.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            description: '',
            ingredients: '',
            instructions: '',
            image: ''
        };
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeIngredients(e) {
        this.setState({
            ingredients: e.target.value
        });
    }

    onChangeInstructions(e) {
        this.setState({
            instructions: e.target.value
        });
    }

 
    onSubmit(e) {
        e.preventDefault();
        
        console.log('Form submitted:');
        console.log(`Description: ${this.state.description}`);
        console.log(`Ingredients: ${this.state.ingredients}`);
        console.log(`Instructions: ${this.state.instructions}`);

        this.setState({
            description: '',
            ingredients: '',
            instructions: '',
            image: ''
        });
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Create New Recipe</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text"
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
                        <label>instructions: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.instructions}
                            onChange={this.onChangeInstructions}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="submit"
                            value="Create a recipe"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}
