import React from 'react'

const ImageViewer = ({ fileType, fileUrl }) => {
  return (
    <div className={`mg-viewer mg-viewer-image mg-viewer-${fileType}`}>
      {fileUrl ? <img src={fileUrl} /> : null}
    </div>
  )
}

export default ImageViewer
