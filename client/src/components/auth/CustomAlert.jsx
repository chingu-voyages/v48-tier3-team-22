import React from 'react';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        borderRadius: '15px',
        border: '2px solid red',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 9999,
        fontSize: '1.2em', // Larger font size
        textAlign: 'center',
      }}
    >
      <p>{message}</p>
      <button
        style={{
          padding: '10px 20px',
          background: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '15px',
        }}
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default CustomAlert;
