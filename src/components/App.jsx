import { Component } from "react";
import { nanoid } from 'nanoid';
// import Section from "./Section";
// import FormName from "./FormName";
// import Contacts from "./Contacts";

class App extends Component{
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  handleNameChange = (evt) => {
    this.setState({
      name: evt.target.value
    })
  }

  handleNumberChange = (evt) => {
    this.setState({
      number: evt.target.value
    })
  }

  handleNameFilter = (evt) => {
    this.setState({
      filter: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    const {contacts, name, number} = this.state;
    const contact = { name, number, id: nanoid() };
    evt.preventDefault();   

    this.setState({
      contacts: [...contacts, contact],
      name: (''),
      number: ('')
    })

    // const existingContact = contacts.findIndex(contact => contact.name.toLowerCase() === name.toLowerCase)

    // if(existingContact !== -1){
    //   alert(`${name} is already in contacts`)
    // }
    // contacts.forEach((el) => {
    //   if(contacts.name.includes(el.name)){
    //     alert(`${el.name} is already in contacts`)
    //   }
    //   console.log(el.name)
    //   console.log(contacts.name)
    // })
    
    // if(contact.name === contact.name){
    //   alert(`${contact.name} is already in contacts`)
    // }

    // console.log(this.state)
    // console.log(`Name: ${name}`)
    // console.log(`Number: ${number}`)
  }

  render(){
    const { contacts, name, number, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return(
      <div>
        <h2>Phonebook</h2>
        <p>Name</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleNameChange}
          />
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleNumberChange}
          />
          <button type="submit">Add Contact</button>
        </form>

        <div>
          <h2>Contacts</h2>

          <p>Find contacts by name</p>
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleNameFilter}
          />

          <ul>
            {filteredContacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>

        </div>

        <div>

        </div>
      </div>
      // <div>
      //   {/* <Section title = "Phonebook"> */}
      //     {/* <FormName onSubmit={values => console.log(values)}/> */}
      //   {/* </Section> */}
      //   {/* <Section title = "Contacts"> */}
      //     {/* <Contacts/> */}
      //   {/* </Section> */}
      // </div>
    )
  };
}

export default App;
