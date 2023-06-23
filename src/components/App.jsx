import { Component } from 'react';
import Section from './section/section';
import FeedbackBtn from './buttons/buttons';
import Statictics from './statistics/statistics';
import Notification from './notifications/notifications';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedBack = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    if (total !== 0) {
      return ((good / total) * 100).toFixed(0);
    }
    return 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback" />
        <FeedbackBtn options={options} onLeaveFeedBack={this.onLeaveFeedBack} />
        <Section />
        <Section title="Statictics">
          {total > 0 ? (
            <Statictics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
export { App };
