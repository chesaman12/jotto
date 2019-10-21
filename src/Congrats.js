import React from 'react';

export default (props) => {
  return (
    <>
      {props.success && (
        <div data-test='component-congrats' className="alert alert-success">
          <span data-test='congrats-message' key='congrats'>
            Congratulations! You guessed the word!
          </span>
        </div>
      )}
      <div data-test='component-congrats' />
    </>
  );
}

