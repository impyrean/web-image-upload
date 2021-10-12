import { useRef } from 'react';

const App = () => {
  const imageCaptureRef = useRef(null)
  const reader = new FileReader()

  const onImageCaptured = () => {
    const file = imageCaptureRef.current.files[0]
    reader.onload = e => console.log(reader.result, e)
    reader.readAsDataURL(file)
  }

  return (
    <div className="fullHeight">
      <div className="main">
        <input
          accept="image/*"
          capture="environment"
          name="image"
          onChange={onImageCaptured}
          ref={imageCaptureRef}
          type="file"
        />
        Snap a Pic
      </div>
    </div>
  )
}

export default App