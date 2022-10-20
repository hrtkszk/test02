import React from 'react';
import { useState } from 'react';
import ImageUploader from 'react-images-upload';

export function PicULTest(){
  const [pictures, setPictures] = useState("");
  console.log("Picture:", pictures)

  const onDrop=(pictureFiles)=>{
    console.log("onDrop:", pictureFiles)
    setPictures(pictures.concat(pictureFiles))
  }

  return(
    <ImageUploader
        withIcon={false}
        buttonText='Choose images'
        onChange={onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
    />
  )
}
