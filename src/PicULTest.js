import React from 'react';
import { useState } from 'react';
import ImageUploader from 'react-images-upload';

export function PicULTest(){
  const [Picture, setPicture] = useState("");
  console.log(Picture)

  const onDrop=(event)=>{
    setPicture(event)
  }

  return(
    <ImageUploader
        withIcon={true}
        buttonText='Choose images'
        onChange={onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
    />
  )
}
