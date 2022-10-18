import React from "react";
import './Modal.css'

function Modal({ updateModal, modalImg, addFavoriteCats }) {
    return (
        <React.Fragment>
            <div className="modal">
                <div className="modal-body">
                    <h1>Нравится котик?</h1>
                    <img src={modalImg} />
                    <div className='page-buttons'>
                        <button onClick={() => addFavoriteCats(modalImg)}>Добавить</button>
                        <button onClick={updateModal}>Закрыть</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Modal;
