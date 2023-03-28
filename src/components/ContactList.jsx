import { Component } from "react";
import ContactListItem from './ContactListItem';
import './ContactList.css'

class ContactList extends Component {
    render() {
        const { contacts, onDeleteContact } = this.props;
        return (
            <ul className="contactList__unordered-list">
                {contacts.map((contact) => (
                    <ContactListItem key={contact.id} {...contact} onDeleteContact={onDeleteContact}/>
                ))}
            </ul>
        );
    }
}

export default ContactList