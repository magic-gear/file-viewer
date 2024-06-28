import React from 'react'
import './main.scss'
import {
  DocxViewer,
  ExcelViewer,
  ImageViewer,
  PdfViewer,
  UnsupportedViewer,
} from './drivers'
import cx from 'classnames'

const FileViewer = (props) => {
  const { style, className, ...rest } = props

  const getDriver = () => {
    switch (props.fileType) {
      case 'csv':
      case 'xlsx': {
        return ExcelViewer
      }
      case 'jpg':
      case 'jpeg':
      case 'gif':
      case 'bmp':
      case 'png': {
        return ImageViewer
      }
      case 'pdf': {
        return PdfViewer
      }
      case 'docx': {
        return DocxViewer
      }
      default: {
        return UnsupportedViewer
      }
    }
  }
  const Driver = getDriver()
  return (
    <div className={cx(`mg-viewer-wrapper`, className)} style={style}>
      <Driver {...rest} />
    </div>
  )
}

export default FileViewer
