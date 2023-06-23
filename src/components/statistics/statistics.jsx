import css from './statistics.module.css';
import PropTypes from 'prop-types';

const Statictics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.feedback__list}>
      <li className={css.feedback__item}>good: {good}</li>
      <li className={css.feedback__item}>neutral: {neutral}</li>
      <li className={css.feedback__item}>bad: {bad}</li>
      <li className={css.feedback__item}>total: {total}</li>
      <li className={css.feedback__item}>positive: {positivePercentage}%</li>
    </ul>
  );
};

Statictics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  positivePercentage: PropTypes.func,
  total: PropTypes.func,
};

export default Statictics;
