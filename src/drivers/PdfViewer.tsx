import React, { useEffect, useRef, useState } from 'react'
import jsPreviewPdf from '@js-preview/pdf'
import Loading from '../Loading'
import Error from '../Error'
import { Options } from '@js-preview/pdf'

const PdfViewer: React.FC<{
  options?: Options
  requestOptions?: RequestInit
  errorComponent?: React.ComponentType
  loadingIcon?: React.ReactNode
  fileType: string
  fileUrl: string
  onError?: (error: Error) => void
}> = (props) => {
  const { fileType, fileUrl, onError, options, requestOptions } = props
  const ref = useRef()
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState<boolean | Error>(false)
  useEffect(() => {
    if (fileUrl && ref.current) {
      setLoading(true)
      setError(false)
      const previewer = jsPreviewPdf.init(
        ref.current,
        {
          ...options,
          // @ts-ignore
          onError: (e) => {
            if (onError) onError(e)
            setError(e)
            setLoading(false)
          },
          onRendered: () => {
            setLoading(false)
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

  if (error) return <Error {...props} error={error as Error} />
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
