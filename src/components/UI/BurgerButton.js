const BurgerButton = ({ onClick }) => {
  return (
    <div className="burger-button" onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerButton;
