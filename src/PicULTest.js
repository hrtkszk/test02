import * as React from "react";
import { useState } from 'react';
import {
  // Link,
//   // Outlet
  useNavigate
} from "react-router-dom";

export function PicULTest() {
  const [imgfile, uploadimg] = useState("")
  const [compImgFile, setCompImgFile] = useState("")
  const [tempURL, setTempURL] = useState("")
  const gulp = require('gulp')
  const webp = require('gulp-webp')


  // gulp.task('default', () =>
  //     gulp.src('src/image.jpg')
  //         .pipe(webp())
  //         .pipe(gulp.dest('dist'))
  // );

  let navigate = useNavigate();

  console.log("imgfile:", imgfile)

  const submit = (event) => {
    event.preventDefault();

    setCompImgFile(gulp.src(imgfile)
      .pipe(webp())
      .pipe(gulp.dest(paths.img_build))
    )
    console.log("compImgFile:", compImgFile)

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

