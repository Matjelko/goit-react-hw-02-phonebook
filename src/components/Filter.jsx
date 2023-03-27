import { Component } from "react";

class Filter extends Component {
    handleNameFilter = (evt) => {
        this.props.onFilterChange(evt.target.value);
    };
    
    render() {
        const { filter } = this.props;
        return (
            <div>
                <p>Find contacts by name</p>
                <input
                    type="text"
                    name="name"
                    title="title"
                    value={filter}
                    onChange={this.handleNameFilter}
                />
            </div>
        );
    }
}

export default Filter