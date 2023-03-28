import { Component } from "react";
import './ContactListItem.css'

class ContactListItem extends Component {
    handleDelete = () => {
        this.props.onDeleteContact(this.props.id);
    }

    render() {
        const { name, number } = this.props;
        return (
            <li className="contactListItem__unordered-list--item">
                {name}: {number}
                <button className="contactListItem__unordered-list--button" onClick={this.handleDelete}>Delete</button>
            </li>
        );
    }
}

export default ContactListItem