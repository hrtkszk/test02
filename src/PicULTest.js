import * as React from "react";
import { useState } from 'react';
import {
  // Link,
//   // Outlet
  useNavigate
} from "react-router-dom";

export function PicULTest() {
  const [imgfile, uploadimg] = useState([])
  let navigate = useNavigate();

  console.log("imgfile:", imgfile[0])

  const submit = (event) => {
    event.preventDefault();

    const formData = new FormData()
    formData.append('image', imgfile[0])

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
                onChange={e => uploadimg({0 : e.target.files[0]})}
                // onChange={e => uploadimg(imgfile => [...imgfile, URL.createObjectURL(e.target.files[0])])}
              />
            </div>
            <br />
            <button>送信</button>
          </form>
          <hr />
          
          <h2>Preview</h2>
          {/* <img src={imgfile} height="200" width="200" alt="med1" /> */}
          {Object.keys(imgfile).map(elem => {
            return <>
            <span key={elem}>
              <img src={elem} height="200" width="200" alt="med1" />
            </span>
          </>
          })}
        </center>
      </div>
    </div>
  );
}
export default PicULTest;

