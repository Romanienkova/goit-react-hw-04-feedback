import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({
	options,
	onLeaveFeedback,
}) => (
	<div className="options">
		{options.map(button =>
		(
			<button
				type='button'
				key={button}
				className="btn"
				onClick={() => onLeaveFeedback(button)}
			>
			</button>
		)
		)
		}
	</div>);


export default FeedbackOptions;

FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func,
};