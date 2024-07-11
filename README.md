# @magic-gear/file-viewer

## Supported file formats:

- [x] Images: png, jpg, jpeg, gif, bmp
- [x] pdf
- [x] csv
- [x] xls
- [x] xlsx
- [x] docx
- [x] mp3
- [x] mp4
- [x] webm

## Getting Started

```
npm install @magic-gear/file-viewer
```

## Usage

```jsx
import React from 'react'
import FileViewer from '@magic-gear/file-viewer'
import { CustomErrorComponent } from 'custom-error'

const MyComponent = () => {
  const file = 'http://example.com/image.png'
  const type = 'png'
  const fetchOptions = { headers: { 'app-id': 'abc123' } }

  return (
    <FileViewer
      fileType={type}
      filePath={file}
      requestOptions={fetchOptions}
      errorComponent={CustomErrorComponent}
    />
  )
}

export default MyComponent
```
