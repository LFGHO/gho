import React from 'react'

function ActionButton({ text, loadingText, isLoading, onClick , children}) {
  return (
    <div
      disabled={isLoading}
      className="button_design w-full px-3 md:px-4 py-3 md:py-3 text-white rounded-2xl font-bold cursor-pointer text-center"
      size="lg"
      active
      onClick={onClick}
    >
      {isLoading ? loadingText : text || children}
    </div>
  );
}

export default ActionButton;
