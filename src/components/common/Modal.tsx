import React, { FC } from 'react';
import { Modal as MUIModal, ModalProps as MUIModalProps } from '@mui/material';

export interface ModalProps extends MUIModalProps {
  title?: string;
  onClose: () => void;
  onError?: (error: any) => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children, onError, ...props }) => {
  const handleClose = () => {
    try {
      onClose();
    } catch (error) {
      onError?.(error);
    }
  };

  return (
    <MUIModal
      open={isOpen}
      onClose={handleClose}
      {...props}
    >
      <div className="modal-content">
        {title && <h2 className="modal-title">{title}</h2>}
        <div className="modal-body">{children}</div>
      </div>
    </MUIModal>
  );
};

export default Modal;