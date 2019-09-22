import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import {
  ModalText,
  ModalActions,
  Confirmation,
  Decline,
} from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
};

const Modal = ({
  text,
  confirmation,
  decline,
  isOpen,
}) => (
  <ReactModal isOpen={isOpen} style={customStyles}>
    <ModalText>{text}</ModalText>
    <ModalActions>
      <Confirmation onClick={() => confirmation()}>Confirmar</Confirmation>
      <Decline onClick={() => decline()}>Cancelar</Decline>
    </ModalActions>
  </ReactModal>
);

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  confirmation: PropTypes.func.isRequired,
  decline: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;
