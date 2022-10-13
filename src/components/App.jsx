import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import s from './Feedback/Feedback.module.css';

const { Component } = require('react');

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = ({ target: { name } }) => {
    this.setState({ ...this.state, [name]: this.state[name] + 1 });
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = (good * 100) / total;
    return (
      <div className={s.block}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
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
  }
}

export default App;
