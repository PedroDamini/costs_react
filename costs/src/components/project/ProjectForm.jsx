import Input from '../form/Input';
import Select from '../form/Select';
import SumbitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input 
                type="text" 
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input 
                type="number" 
                text="orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />
            <Select 
                name="category_id" 
                text='Selecione a categoria'
            />
            <SumbitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm;