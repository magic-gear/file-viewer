import React, { useEffect, useRef, useState } from 'react'
import jsPreviewExcel from '@js-preview/excel'
import '@js-preview/excel/lib/index.css'
import { csvToXlsx, xlsToXlsx } from '../helpers'
import Loading from '../Loading'
import Error from '../Error'

const ExcelViewer = (props) => {
  const { fileType, fileUrl, onError, options, requestOptions } = props
  const ref = useRef()
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(false)
  useEffect(() => {
    if (fileUrl && ref.current) {
      const previewer = jsPreviewExcel.init(
        ref.current,
        options,
        requestOptions,
      )
      ;(async () => {
        let src = fileUrl
        setLoading(true)
        setError(false)
        try {
          if (fileType === 'csv') {
            src = await csvToXlsx(fileUrl)
          } else if (fileType === 'xls') {
            src = await xlsToXlsx(fileUrl)
          }
          if (previewer['container']) {
            previewer.preview(src).finally(() => setLoading(false))
          }
        } catch (e) {
          if (onError) {
            onError(e)
          }
          setError(e)
          setLoading(false)
        }
      })()
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

export default ExcelViewer
