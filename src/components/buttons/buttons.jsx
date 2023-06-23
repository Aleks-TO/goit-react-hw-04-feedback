import css from './buttons.module.css';
import PropTypes from 'prop-types';

const FeedbackBtn = ({ options, onLeaveFeedBack }) => {
  return (
    <div className={css.feedback__buttons}>
      {options.map(option => {
        return (
          <button
            key={option}
            className={css.feedback__button}
            type="button"
            onClick={() => onLeaveFeedBack(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackBtn.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedBack: PropTypes.func.isRequired,
};
export default FeedbackBtn;
