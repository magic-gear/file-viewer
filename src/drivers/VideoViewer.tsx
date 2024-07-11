import React from 'react'

const VideoViewer: React.FC<{ fileType: string; fileUrl: string }> = (
  props,
) => {
  const { fileType, fileUrl } = props
  return (
    <div className={`mg-viewer mg-viewer-video mg-viewer-${fileType}`}>
      <video controls src={fileUrl}>
        video playback is not supported by your browser.
      </video>
    </div>
  )
}

export default VideoViewer
