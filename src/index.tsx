import React from 'react'
import './main.scss'
import {
  AudioViewer,
  DocxViewer,
  ExcelViewer,
  ImageViewer,
  PdfViewer,
  UnsupportedViewer,
  VideoViewer,
} from './drivers'
import cx from 'classnames'
import { Options } from '@js-preview/excel'
import { Options as DocOptions } from '@js-preview/docx'
import { Options as PdfOptions } from '@js-preview/pdf'

export interface FileViewerProps {
  options?: Options | DocOptions | PdfOptions
  requestOptions?: RequestInit
  unsupportedComponent?: React.ComponentType<any>
  errorComponent?: React.ComponentType<any>
  loadingIcon?: React.ReactNode
  onError?: (error: Error) => void
  fileType: string
  fileUrl: string
}

const FileViewer: React.FC<
  FileViewerProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { style, className, ...rest } = props

  const getDriver = () => {
    switch (props.fileType) {
      case 'csv':
      case 'xls':
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
      case 'mp3': {
        return AudioViewer
      }
      case 'mp4':
      case 'webm': {
        return VideoViewer
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
