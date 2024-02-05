import styles from '../project/ProjectForm.module.css';
import { useState } from 'react';
import Input from '../form/Input';
import SumbitButton from '../form/SubmitButton';

function ServiceForm () {

    function Submit() {

    }

    function handleChange(e) {

    }

    return (
        <form action="">
            <Input 
                type="text"
                text="Nome do Serviço"
                name="name"
                placeholder="Insira o nome do Serviço"
                handleOnChange={handleChange}
            />
        </form>
    );
}

export default ServiceForm;