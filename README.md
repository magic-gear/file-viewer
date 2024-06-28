# @magic-gear/file-viewer

## Supported file formats:

- [x] Images: png, jpeg, gif, bmp
- [x] pdf
- [x] csv
- [x] xlsx
- [x] docx

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
