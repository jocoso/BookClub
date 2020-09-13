import React from 'react';
import styled from 'styled-components';
import CircleButton from '../CircleButton/index';
import "../../App.css";

export default function ModalComponent( { handleClose, hidden, children } ) {
    return (
        <Modal hidden = {hidden} >
            <section className="modal-main column">
                <button className="close-button" onClick={ handleClose }> x </button>
                <div className="row">{children}</div>
                <div className="footer row">
                    <CircleButton radius={2.5}> {"<"} </CircleButton>
                    <CircleButton radius={2.5}> {">"} </CircleButton>
                </div>
            </section>
        </Modal>
    )
}

const Modal = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: ${ props => props.hidden ? "none" : "block" };

    .modal-main {
        position: fixed;
        background: white;
        width: 90%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid black;
        border-radius: 0.6rem;
    }

    .close-button {
        position: absolute;
        left: 100%;
        transform: translate(-120%, 0);
    }

    .modal-main .footer{
        background: #A9A9A9;
        display: block;
        width: 100%;
    }

    .footer button {
        position: relative;
        left: 100%;
        transform: translate(-220%, 0);
    }

`;