import React from 'react';
// import { useState } from 'react';
import ImageUploader from 'react-images-upload';

// export function PicULTest(){
//   const [pictures, setPictures] = useState("");
//   console.log("Picture:", pictures)

//   const onDrop=(pictureFiles)=>{
//     console.log("onDrop:", pictureFiles)
//     setPictures(pictures.concat(pictureFiles))
//   }

//   return(
//     <ImageUploader
//         withIcon={false}
//         buttonText='Choose images'
//         onChange={onDrop}
//         imgExtension={['.jpg', '.gif', '.png', '.gif']}
//         maxFileSize={5242880}
//     />
//   )
// }

// import React from 'react';
// import ImageUploader from 'react-images-upload';
 
class App extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
    
 
    onDrop(picture) {
        console.log(picture)
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        console.log(this.state.pictures)
    }
 
    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}