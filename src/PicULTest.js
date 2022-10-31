import * as React from "react";
import { useState } from 'react';
import {
  // Link,
//   // Outlet
  useNavigate
} from "react-router-dom";

// import imagemin from 'imagemin';
// import imageminWebp from 'imagemin-webp';

export function PicULTest() {
  const [imgfile, uploadimg] = useState("")
  // const [compImgFile, setCompImgFile] = useState("")
  const [tempURL, setTempURL] = useState("")

  let navigate = useNavigate();

  console.log("imgfile:", imgfile)

  const submit = (event) => {
    event.preventDefault();
    // declare module 'webp-converter';
    const webp=require('webp-converter');
    const result = webp.cwebp(imgfile,"nodejs_logo.webp","-q 80",logging="-v");
    result.then((response) => {
      console.log(response);
      });
    
    // const files = (async () => {
    //   await imagemin([imgfile], {
    //     plugins: [
    //       imageminWebp({quality: 50})
    //     ]
    //   });

    
    // console.log('Images optimized');
    // })();
    // setCompImgFile(files)

    // setCompImgFile(imagemin([imgfile], {plugins: [imageminWebp({quality: 50})]}))
    // console.log("compImgFile:", compImgFile)
    

    const formData = new FormData()
    formData.append('image', imgfile)

    const requestOptions1 ={
      method: 'POST',
      body: formData
    }

    // console.log("imgfile:", imgfile)

    try {
      fetch('../picULTest.php',requestOptions1)
      .then((response) => response.text())
      .then(result => {
        console.log(result)
      })
    } catch (err) {
      console.log(err);
    }


    navigate("../")
  }

  return (
    <div className="App">
      <div>
        <center>
          <h2>Upload</h2>
          <form onSubmit={e => submit(e)}>
            <div>
              {/* <label for="image_uploads">アップロードする画像を選択してください (PNG, JPG)</label> */}
              <input
                type="file"
                id="img"
                name="img"
                accept=".jpg, .jpeg, .png"
                onChange={e => {
                  uploadimg(e.target.files[0])
                  setTempURL(URL.createObjectURL(e.target.files[0]))
                }}
                // onChange={e => uploadimg(imgfile => [...imgfile, URL.createObjectURL(e.target.files[0])])}
              />
            </div>
            <br />
            <button>送信</button>
          </form>
          <hr />
          
          <h2>Preview</h2>
          {tempURL === "" ?
            (
              null
            ):(
              <img src={tempURL} width="100" alt="" />
            )
          }
        </center>
      </div>
    </div>
  );
}
export default PicULTest;

