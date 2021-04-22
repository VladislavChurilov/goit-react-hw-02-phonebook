import styles from '../../Phonebook.module.css';

const Filter =({value, onChangeFilter}) => (
    <label className={styles.labelFilter} > Find contacts by name
       <input className={styles.input} type="text" value={value} onChange={onChangeFilter}  />
    </label>
)

export default Filter;