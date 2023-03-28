import { Component } from "react";
import { nanoid } from 'nanoid';
import './ContactForm.css'

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };
    
    handleNameChange = (evt) => {
        this.setState({
            name: evt.target.value
        });
    };
    
    handleNumberChange = (evt) => {
        this.setState({
            number: evt.target.value
        });
    };
    
    handleSubmit = (evt) => {
        evt.preventDefault();
        const { name, number } = this.state;
        this.props.onAddContact({ name, number, id: nanoid() });
        this.setState({ 
            name: '', 
            number: ''
        });
    };
    
    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
            <p className="contactForm__paragraph">Name</p>
            <input
                className = "contactForm__input"
                type="text"
                name="name"
                title="title"
                required
                value={name}
                onChange={this.handleNameChange}
                />
            <p className="contactForm__paragraph--number">Number</p>
            <input
                className = "contactForm__input"
                type="tel"
                name="number"
                title="title"
                required
                value={number}
                onChange={this.handleNumberChange}
                />
            <button className="contactForm__button" type="submit">Add Contact</button>
            </form>
        );
    }
}

export default ContactForm