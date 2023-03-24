// import { Component } from "react";

// class FormName extends Component {
//     handleSubmit = evt => {
//         evt.preventDefault();

//         const form = evt.currentTarget;
//         const contact = form.elements.name.value;

//         this.props.onSubmit({ contact });
//         form.reset();
//       }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                     required
//                 />
//                 <button type="submit">Add Contact</button>
//             </form>
//         )
//     }  
// }

// export default FormName;