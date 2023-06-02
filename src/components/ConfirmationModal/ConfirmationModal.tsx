import React, { useState } from 'react';

interface ConfirmationModalProps {
    isOpen: boolean;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isOpen,
    message,
    onConfirm,
    onCancel,
}) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleConfirm = () => {
        setIsAnimating(true);
        setTimeout(() => {
            onConfirm();
            setIsAnimating(false);
        }, 300);
    };

    const handleCancel = () => {
        setIsAnimating(true);
        setTimeout(() => {
            onCancel();
            setIsAnimating(false);
        }, 300);
    };

    return (
        <div className={`modal ${isOpen ? 'is-open' : ''}`}>
            <div className={`modal-dialog ${isAnimating ? 'is-animating' : ''}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirmation</h5>
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={handleConfirm}>
                            Confirm
                        </button>
                        <button className="btn btn-secondary" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
