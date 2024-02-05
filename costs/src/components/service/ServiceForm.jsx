import styles from '../project/ProjectForm.module.css';
import { useState } from 'react';
import Input from '../form/Input';
import SumbitButton from '../form/SubmitButton';

function ServiceForm ({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Nome do Serviço"
                name="name"
                placeholder="Insira o nome do Serviço"
                handleOnChange={handleChange}
            />
            <Input 
                type="number"
                text="Custo do Serviço"
                name="cost"
                placeholder="Insira o valor do Serviço"
                handleOnChange={handleChange}
            />
            <Input 
                type="text"
                text="descrição do Serviço"
                name="description"
                placeholder="Descreva o Serviço"
                handleOnChange={handleChange}
            />
            <SumbitButton text={btnText}/>
        </form>
    );
}

export default ServiceForm;