import React from 'react'

const Error: React.FC<{
  errorComponent?: React.ComponentType<any>
  error?: Error
}> = (props) => (
  <div className="error-message">
    {props.errorComponent ? (
      <props.errorComponent {...props} />
    ) : (
      <p className="alert">Unable to preview file</p>
    )}
  </div>
)

export default Error
