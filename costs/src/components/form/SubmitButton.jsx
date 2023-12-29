
import styles from './SubmitButton.module.css';

function SumbitButton({ text }) {
    return (
        <div>
            <button className={styles.btn}>
                {text}
            </button>
        </div>
    )
}

export default SumbitButton;