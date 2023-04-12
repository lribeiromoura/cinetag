import styles from './Titulo.module.css';

function Titulo({children}) {
    return (
        <div className={styles.text}>
            { children }
        </div>
    )
}

export default Titulo;