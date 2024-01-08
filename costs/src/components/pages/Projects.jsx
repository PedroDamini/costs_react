import { useLocation } from "react-router-dom";
import Message from "../layout/Message";


function Projects() {

    const  location = useLocation();
    let message = '';
    if(location.state) {
        message = location.state.message
    }

    return (
        <div>
            <h1> Projects </h1>
            <Message msg="Alguma mensagem" />
        </div>
    )
}

export default Projects;