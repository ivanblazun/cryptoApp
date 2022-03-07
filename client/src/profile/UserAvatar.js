import React, { useState, useEffect } from 'react'

const UserAvatar = () => {
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

    // console.log(e.target.files[0])

    // const i = e.target.files[0]

    // setImg(i)
  }

  return (
    <div>
      <img src={prewiew} className="rounded-circle mt-5" style={{ border: 'solid 1px', width: "150px" }} />
    </div>
  )
}

export default UserAvatar