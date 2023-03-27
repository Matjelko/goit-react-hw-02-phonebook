import { Component } from "react";

import ContactListItem from './ContactListItem'

class ContactList extends Component {
    render() {
        const { contacts } = this.props;
        return (
            <ul>
                {contacts.map((contact) => (
                    <ContactListItem key={contact.id} {...contact} />
                ))}
            </ul>
        );
    }
}

export default ContactList