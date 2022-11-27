import React from 'react';

const ConfirmetionModal = ({title, message, modalClose, modalData, productDelete, successBtnName}) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmetion-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={()=> productDelete(modalData)} htmlFor="confirmetion-modal" className="btn btn-primary">{successBtnName}</label>
                        <button onClick={modalClose} className="btn btn-outline">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmetionModal;