import React, { useEffect, useRef, useState } from 'react'
import jsPreviewPdf from '@js-preview/pdf'
import Loading from '../Loading'
import Error from '../Error'

const PdfViewer = (props) => {
  const { fileType, fileUrl, onError, options, requestOptions } = props
  const ref = useRef()
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(false)
  useEffect(() => {
    if (fileUrl && ref.current) {
      setLoading(true)
      setError(false)
      const previewer = jsPreviewPdf.init(
        ref.current,
        {
          ...options,
          onError: (e) => {
            if (onError) onError(e)
            setError(e)
            setLoading(true)
          },
          onRendered: () => {
            setLoading(true)
          },
        },
        requestOptions,
      )
      if (previewer['container']) {
        previewer.preview(fileUrl)
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

export default PdfViewer
