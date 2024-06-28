import React from 'react'

const UnsupportedViewer = (props) => {
  return (
    <div className="mg-driver-view">
      <div className="unsupported-message">
        {props.unsupportedComponent ? (
          <props.unsupportedComponent {...props} />
        ) : (
          <p className="alert">
            <b>{`.${props.fileType}`}</b> is not supported.
          </p>
        )}
      </div>
    </div>
  )
}

export default UnsupportedViewer
