const Finestra = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="finestra-overlay">
      <div className="finestra">
        <button onClick={onClose} className="finestra-close-button">
          X
        </button>
        <div className="finestra-content">{children}</div>
      </div>
    </div>
  );
};

export default Finestra;
