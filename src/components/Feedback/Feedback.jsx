// // import PropTypes from 'prop-types';
// import React from 'react';

// import Statistics from 'components/Statistics/Statistics';

// class Feedback extends React.Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//    //  static propTypes = {
//    //    good: PropTypes.number,
//    //    neutral: PropTypes.number,
//    //    bad: PropTypes.number,
//    //  };

//   state = {
//     good: this.props.initialValue,
//     neutral: this.props.initialValue,
//     bad: this.props.initialValue,
//   };

//   getGoodFeedback = () => {
// 	  this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   getNeutralFeedback = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   getBadFeedback = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   render() {
//     return (
//       <div className="Feedback">
//         <Statistics
//           onGoodFeedback={this.getGoodFeedback}
//           onNeutralFeedback={this.getNeutralFeedback}
//           onBadFeedback={this.getBadFeedback}
//         />
//         {/* <div className="buttons">
//           <button type="button" onClick={this.getGoodFeedback} className="btn">
//             Good
//           </button>
//           <button
//             type="button"
//             onClick={this.getNeutralFeedback}
//             className="btn"
//           >
//             Neutral
//           </button>
//           <button type="button" onClick={this.getBadFeedback} className="btn">
//             Bad
//           </button>
//         </div> */}
//         <h2 className="title__statist">Statistics</h2>
//         {this.state.good === 0 &&
//           this.state.neutral === 0 &&
//           this.state.bad === 0 && (
//             <p className="isFeedback">No feedback given</p>
//           )}
//         {(this.state.good > 0 ||
//           this.state.neutral > 0 ||
//           this.state.bad > 0) && (
//           <div className="results">
//             <span className="good">Good: {this.state.good}</span>
//             <span className="neutral">Neutral: {this.state.neutral}</span>
//             <span className="bad">Bad: {this.state.bad}</span>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default Feedback;
