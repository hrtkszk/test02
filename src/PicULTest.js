import React from 'react';
// import { useState } from 'react';
import ImageUploader from 'react-images-upload';

// export function PicULTest(){
//   const [pictures, setPictures] = useState("");

//   const onDrop=(pictureFiles)=>{
//     console.log("onDrop:", pictureFiles)
//     setPictures(pictureFiles)
//   }

//   console.log("Picture:", pictures)
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
 
class PicULTest extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
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