import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {

  renderQuotes = () => {
    return this.props.quotes.map(quote => {
      return <QuoteCard key={quote.id} quote={quote} handleClick={this.handleClick} />})
  }

  handleClick = (id, buttonName) => {
    if (buttonName === "upvote") {
      this.props.upvoteQuote(id)
    } else if (buttonName === "downvote") {
      this.props.downvoteQuote(id)
    } else {
      this.props.removeQuote(id)
    }
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(state => ({ quotes: state.quotes }), { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
