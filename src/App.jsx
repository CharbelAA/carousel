import { useEffect, useState } from "react";
import "./App.css";
import SlideShow from "./components/SlideShow";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [currentImgID, setCurrentImgID] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/random?count=2",
          {
            headers: {
              Authorization:
                "Client-ID Uvid_-GnskIsrKRdvWOlz-ILIhG4fCvAxtwqaGnavWo", // Replace with your actual Unsplash API access key
            },
          }
        );
        setImages(response.data);
        setCurrentImgID(images[0]?.id);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  });

  return (
    <>
      <h1> Image Gallery </h1>
      {currentImgID && <SlideShow images={images} currentId={currentImgID} />}
      <button
        onClick={() => {
          console.log(currentImgID);
        }}
      >
        Load Images
      </button>
    </>
  );
}

export default App;

// function createImages(image) {
//   return image.map((image) => (
//     <Carousel
//       key={image.id}
//       src={image.urls.regular}
//       alt={image.alt_description}
//     />
//   ));
// }
