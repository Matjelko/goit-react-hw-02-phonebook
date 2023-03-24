import { Component } from "react";
// import Section from "./Section";
// import FormName from "./FormName";
// import Contacts from "./Contacts";

class App extends Component{
  state = {
    contacts: [],
    name: ''
  }

  // handleChange = (evt) => {
  //   this.setState({contacts: evt.target.value});
  // }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const contact = form.elements.name.value;

    console.log(contact)
    console.log(this.state)

    form.reset();
  }

  render(){
    // const { contacts, name } = this.state;

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add Contact</button>
        </form>

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
