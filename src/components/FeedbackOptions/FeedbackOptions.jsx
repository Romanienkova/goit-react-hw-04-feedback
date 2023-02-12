import React from 'react';
import PropTypes from 'prop-types';

import { Options, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Options>
		{options.map(button => {
      return (
        <Button
          type="button"
          key={button}
          onClick={() => onLeaveFeedback(button)}
        >
          {button.toUpperCase().slice(0, 1) + button.slice(1)}
        </Button>
      );
    })}
  </Options>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
