import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <button
            className="CreateTodoButton"
            //onClick={() => onClickButton('Aqui se debe abrir un modal')}
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };