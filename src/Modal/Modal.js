import React from "react";
import './Modal.css'

function Modal({ updateModal, removeFavoriteCat, modalImg, addFavoriteCats, page }) {

    function removeCat(modalImg) {
        removeFavoriteCat(modalImg)
        updateModal()
    }

    if (page === 'GeneralPage') {
        return (
            <React.Fragment>
                <div className="modal">
                    <div className="modal-body">
                        <h2>Картинка с котиком</h2>
                        <img src={modalImg} />
                        <p>Сохраните котика в избранные, если он вам понравился.</p>
                        <div className="modal-buttons">
                            <button className="add-button" onClick={() => addFavoriteCats(modalImg)}>Сохранить</button>
                            <button className="close-button" onClick={updateModal}>Закрыть</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <div className="modal">
                    <div className="modal-body">
                        <h2>Картинка с котиком</h2>
                        <img src={modalImg} />
                        <p>Вы можете удалить котика, если посчитаете нужным.</p>
                        <div className="modal-buttons">
                            <button className="add-button" onClick={() => removeCat(modalImg)}>Удалить</button>
                            <button className="close-button" onClick={updateModal}>Закрыть</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Modal;
