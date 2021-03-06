import { Component } from 'react';
import styles from '../../Phonebook.module.css';
import { v4 as uuidv4 } from 'uuid';


class Form extends Component {
    state = {
        name:'',
        number:'',
    };
    nameId = uuidv4();
    handleChange = e => {   
        const {name, value} = e.currentTarget;
        this.setState({ [name]: value,
        });    
    };
    handleSubmit = e => {
        e.preventDefault();    
        this.props.onHandleChange(this.state);
        this.setState({
            name:'',
            number:'',
        })           
    };
    
    render() {        
        return(
        <form 
        className={styles.form}
        onSubmit={this.handleSubmit}>     
            <label htmlFor={this.nameId} > Name  </label>   
            <input className={styles.input} onChange={this.handleChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                id ={this.nameId}
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
            />  
            <label htmlFor={this.nameId}> Number </label>
            <input className={styles.input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                onChange={this.handleChange}
                required  
            />                   
            <button className={styles.submitButton} type="submit" onSubmit={this.handleSubmit} >Add contact</button>          
        </form>
    )}    
}


export default Form;