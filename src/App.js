import React, { Component } from 'react';
import './App.css';
import EntityForm from './components/EntityForm';
import EntityTable from './components/EntityTable';

class App extends Component {

	constructor(props) {
		super(props); 
		this.state = {
			entityText: '',
			entities: []
		}
		this.handleEntityFormSubmit = this.handleEntityFormSubmit.bind(this);
		this.handleEntityTextChange = this.handleEntityTextChange.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	// handle submit on EntityForm
	handleEntityFormSubmit(event)  {
		event.preventDefault();
		if(this.state.entityText !== '') {
			const entities = this.state.entities;
			entities.push({
				name: this.state.entityText,
				score: 0
			});
			this.setState({
				entities
			});
			this.clearEntityText();
		}
	}

	clearEntityText() {
		this.setState({
			entityText: ''
		});
	}

	// handle input text change on EntityForm
	handleEntityTextChange(event) {
		this.setState({
			entityText: event.target.value
		});
	}

	// handle buttons on EntityRow
	handleButtonClick(e, index) {
		if(e.target.innerText === '+')
			this.updateScore('increment', index);
		else
			this.updateScore('decrement', index);
	}

	updateScore(type, index) {
		let currentScore = this.state.entities[index].score;
		if(type === 'increment') currentScore++;
		else currentScore--;
		const newEntities = this.state.entities.map((entity, currentIndex) => {
			if(index === currentIndex)
				entity.score = currentScore;
			return entity;
		});
		this.setState({
			entities: newEntities
		});
	}

	render() {
		return (
			<div className="App">
				<h1>Scoreboard</h1>
				<EntityForm onEntityFormSubmit={this.handleEntityFormSubmit} onEntityTextChange={this.handleEntityTextChange} entityText={this.state.entityText}/>
				<EntityTable onButtonClick={this.handleButtonClick}entities={this.state.entities} />
			</div>  
		);
	}
}





export default App;
