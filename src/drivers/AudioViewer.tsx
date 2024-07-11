import React from 'react'

const AudioViewer: React.FC<{ fileType: string; fileUrl: string }> = (
  props,
) => {
  const { fileType, fileUrl } = props
  return (
    <div className={`mg-viewer mg-viewer-audio mg-viewer-${fileType}`}>
      <audio controls src={fileUrl}>
        audio playback is not supported by your browser.
      </audio>
    </div>
  )
}

export default AudioViewer
