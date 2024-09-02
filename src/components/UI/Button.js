const Button = ({ onClick, type = 'button', title, variant, size, className = '' }) => {
  const buttonClass = `btn ${variant} ${size} ${className} `;

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
