import React, { useEffect, useRef, useState } from 'react'
import jsPreviewDocx from '@js-preview/docx'
import Loading from '../Loading'
import Error from '../Error'
import { Options } from '@js-preview/docx'

const DocxViewer: React.FC<{
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

  if (error) return <Error {...props} error={error as Error} />
  return (
    <Loading {...props} loading={loading}>
      <div className={`mg-viewer mg-viewer-${fileType}`} ref={ref} />
    </Loading>
  )
}

export default DocxViewer
