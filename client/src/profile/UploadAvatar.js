import React, { useState, useEffect } from 'react'

const UploadAvatar = () => {
  const [img, setImg] = useState(null)

  const [prewiew, setPrewiew] = useState()

  useEffect(() => {
    if (img) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPrewiew(reader.result)
      }

      reader.readAsDataURL(img)

    } else {

    }
  }, [img])

  const ImageLoad = (e) => {

    console.log(e.target.files[0])

    const i = e.target.files[0]

    setImg(i)
  }

  return (
    <div>
      <input type="file" onChange={ImageLoad} />
      <img src={prewiew} />
    </div>
  )
}

export default UploadAvatar