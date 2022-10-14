import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import s from './Feedback/Feedback.module.css';
import { useState } from 'react';

const OPTIONS = ['good', 'neutral', 'bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = ({ target: { name } }) => {
    console.log(name);
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = (good * 100) / total;
  return (
    <div className={s.block}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={OPTIONS} onLeaveFeedback={handleClick} />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={Math.round(positivePercentage)}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};
