import P from 'prop-types';

import './styles.css';

const Button = ({ text, onClick, disabled = false }) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export { Button };

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
