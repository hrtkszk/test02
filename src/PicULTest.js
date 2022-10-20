import React from 'react';
import { useState } from 'react';
import ImageUploader from 'react-images-upload';

export function PicULTest(){
  const [Picture, setPicture] = useState("");
  console.log("Picture:", Picture)

  const onDrop=(event)=>{
    console.log("onDrop:", event)
    setPicture(event)
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
