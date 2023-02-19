import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    let positive = Math.round((good / total) * 100);
    return positive;
  };

  const onLeaveFeedback = name => {
    switch (name) {
		 case 'good':
			 setGood(prev => prev + 1);
			 break;
      case 'neutral':
			 setNeutral(prev => prev + 1);
			 break;
      case 'bad':
			 setBad(prev => prev + 1);
			 break;
      default:
        return;
    }
  };

  const total = countTotalFeedback();
  const options = ['good', 'neutral', 'bad'];

  return (
    <main>
      <Section title="Please Leave Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {total ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage() || 0}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </main>
  );
};

export default App;
