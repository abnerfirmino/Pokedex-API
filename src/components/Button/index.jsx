import PropTypes from 'prop-types';

import './styles.css';

const Button = ({ text, onClick, disabled = false }) => {
  return (
    <div className="button-container">
      <button className="button" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export { Button };

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
