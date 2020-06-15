import React from 'react';

import TextArea from './TextArea';

const ErrorView = ({
  error
}) => {
  return (
    <div>
      <TextArea
        label="Compilation Error"
        text={error?.message}
      />
    </div>
  )
}

export default ErrorView;
