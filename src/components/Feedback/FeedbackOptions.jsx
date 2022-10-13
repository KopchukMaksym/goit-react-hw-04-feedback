import PropTypes from 'prop-types';

import s from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.list__block}>
      {options.map(option => {
        return (
          <li key={option} className={s.item__block}>
            <button name={option} onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
