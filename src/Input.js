import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className='form-inline'>
        <input data-test='input-box' className='mb-2 mx-sm-3' type='text' placeHolder='Enter Guess' />
        <button data-test="submit-button" className="btn btn-primary mb-2" type="submit" children="Submit"/>
      </form>
    );
    return (
      <div data-test="component-input">
        {contents}
      </div>
    );
  }
}

const mapStateToProps = ({success}) => {
  return {success};
};

export default connect(mapStateToProps)(Input);
