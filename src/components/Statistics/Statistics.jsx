import PropTypes from 'prop-types';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => (
  <div className="statistics">
    <p className="res">Good: {good}</p>
    <p className="res">Neutral: {neutral}</p>
		<p className="res">Bad: {bad}</p>
		<p className="res">Total: {total}</p>
		<p className="res">Positive: {positivePercentage}%</p>
  </div>
);

export default Statistics;

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired,
};
