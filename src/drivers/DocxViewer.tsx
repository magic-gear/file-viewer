import React, { useEffect, useRef, useState } from 'react'
import jsPreviewDocx from '@js-preview/docx'
import Loading from '../Loading'
import Error from '../Error'

const DocxViewer = (props) => {
  const { fileType, fileUrl, onError, options, requestOptions } = props
  const ref = useRef()
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(false)
  useEffect(() => {
    if (fileUrl && ref.current) {
      const previewer = jsPreviewDocx.init(ref.current, options, requestOptions)
      setLoading(true)
      setError(false)
      if (previewer['container']) {
        previewer
          .preview(fileUrl)
          .catch((e) => {
            if (onError) onError(e)
            setError(e)
          })
          .finally(() => setLoading(false))
      }
      return () => previewer.destroy()
    }
  }, [fileType, fileUrl])

  if (error) return <Error {...props} error={error} />
  return (
    <Loading {...props} loading={loading}>
      <div
        className={`mg-viewer mg-viewer-excel mg-viewer-${fileType}`}
        ref={ref}
      />
    </Loading>
  )
}

export default DocxViewer
