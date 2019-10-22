import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className='form-inline'>
        <input data-test='input-box' className='mb-2 mx-sm-3' type='text' placeHolder='Enter Guess' />
        <button data-test='submit-button' className='btn btn-primary mb-2' type='submit' children='Submit' 
        onClick={() => {
          this.props.guessWord('train')
        }}/>
      </form>
    );
    return <div data-test='component-input'>{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(
  mapStateToProps,
  { guessWord } // could be mapDispatchToProps, but its overkill for this project..
)(UnconnectedInput);
