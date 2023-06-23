import { Component, useState } from 'react';
import Section from './section/section';
import FeedbackBtn from './buttons/buttons';
import Statictics from './statistics/statistics';
import Notification from './notifications/notifications';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const option = {
    good,
    neutral,
    bad,
  };

  const onLeaveFeedBack = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
    }
  };

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (total !== 0) {
      return ((good / total) * 100).toFixed(0);
    }
    return 0;
  };

  return (
    <>
      <Section title="Please leave feedback" />
      <FeedbackBtn
        options={Object.keys(option)}
        onLeaveFeedBack={onLeaveFeedBack}
      />
      <Section />
      <Section title="Statictics">
        {total > 0 ? (
          <Statictics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
export { App };
