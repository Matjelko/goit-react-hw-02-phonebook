import { Component } from "react";
import { nanoid } from 'nanoid';

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

        //  const { contacts } = this.props;

        //  const existingContact = contacts.find(contact => contact.name === name);
         
        //  if(existingContact) {
        //     alert(`${name} is already in contacts.`)
        //     return;
        //  }
    };
    
    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
            <p>Name</p>
            <input
                type="text"
                name="name"
                title="title"
                required
                value={name}
                onChange={this.handleNameChange}
                />
            <p>Number</p>
            <input
                type="tel"
                name="number"
                title="title"
                required
                value={number}
                onChange={this.handleNumberChange}
                />
            <button type="submit">Add Contact</button>
            </form>
        );
    }
}

export default ContactForm