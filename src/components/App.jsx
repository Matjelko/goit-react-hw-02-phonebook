import { Component } from "react";
import Filter from "./Filter";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
class App extends Component{
  state = {
    contacts: [],
    filter: '',
  }

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };
    
  handleAddContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render(){
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return(
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    )
  };
}

export default App;
