import React from 'react';
import { toast } from 'react-toastify';

function ErrorButton() {
  const showError = () => {
    toast.error('Log:Name, Type:error', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <button onClick={showError}>
      Показать ошибку
    </button>
  );
}

export default ErrorButton;