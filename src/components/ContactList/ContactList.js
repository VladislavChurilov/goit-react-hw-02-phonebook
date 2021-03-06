import PropTypes from 'prop-types';

const ContactList = ({contacts, onDelete }) => (    
    <ul > 
       {contacts.map(({id, name, number}) => (
       <li key ={id} >        
         {name}: {number}
         <button  onClick={() => onDelete(id)} >Delete</button> 
         </li>
     ))}       
    </ul>
)
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.string).isRequired,
    onDelete: PropTypes.func.isRequired,
  };
export default ContactList;