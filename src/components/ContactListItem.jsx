import { Component } from "react";

class ContactListItem extends Component {
    render() {
        const { name, number } = this.props;
        return (
            <li>
                {name}: {number}
            </li>
        );
    }
}

export default ContactListItem