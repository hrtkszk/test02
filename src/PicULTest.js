import { useState } from 'react';

function PicULTest() {
  const [imgfile, uploadimg] = useState([])
  console.log("Image FIles",imgfile);

  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg(imgfile => [...imgfile, URL.createObjectURL(e.target.files[0])])
    }
  }

  return (
    <div className="App">
      <div>
        <center>
          <h2>Upload</h2>
          <input
            type="file"
            onChange={imgFilehandler}
          />
          <hr />
          <h2>Preview</h2>
          {imgfile.map((elem) => {
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


// const upload = (e) => {
// 	console.warn(e.target.files)
// 	const files = e.target.files
// 	const formData = new FormData()
// 	formData.append('img', files[0])
// 	fetch('http://127.0.0.1:8000/api/store', {
// 		method: 'POST',
// 		body: formData,
// 	}).then((resp) => {
// 		resp.json().then((result) => {
// 			console.warn(result)
// 		})
// 	})
// }
// return(<div>
// 	<h1>Upload File in React js</h1>
// 	<input type='file' onChange={(e) => upload(e)} name='img' />
// </div>)


// import React from 'react';
// import { useState } from 'react';
// import ImageUploader from 'react-images-upload';

// export function PicULTest(){
//   const [pictures, setPictures] = useState([]);

//   const onChange=(event)=>{
//     console.log("onChange:", event)
//     setPictures(pictures.concat(event))
//   }

//   return(
//     <ImageUploader
//         withIcon={true}
//         buttonText='Choose images'
//         onChange={onChange}
//         imgExtension={['.jpg', '.gif', '.png', '.gif']}
//         maxFileSize={5242880}
//     />
//   )
// }


// import React from 'react';
// import ImageUploader from 'react-images-upload';
 
// class PicULTest extends React.Component {
 
//     constructor(props) {
//         super(props);
//          this.state = { pictures: [] };
//          this.onDrop = this.onDrop.bind(this);
//     }
 
//     onDrop(picture) {
//         this.setState({
//             pictures: this.state.pictures.concat(picture),
//         });
//     }
 
//     render() {
//         return (
//             <ImageUploader
//                 withIcon={true}
//                 buttonText='Choose images'
//                 onChange={this.onDrop}
//                 imgExtension={['.jpg', '.gif', '.png', '.gif']}
//                 maxFileSize={5242880}
//             />
//         );
//     }
// }