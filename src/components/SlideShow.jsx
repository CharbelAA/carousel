import PropTypes from "prop-types";

const SlideShow = ({ images, currentId }) => {
  if (!images || images.length === 0) {
    return null; // or you can render a loading state or an error message
  }

  const currentImg = images.filter((image) => image.id === currentId);

  console.log(currentImg);

  return (
    <img
      key={currentImg.id}
      src={currentImg.urls?.regular}
      alt={currentImg.alt_description}
    />
  );
};

SlideShow.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        regular: PropTypes.string,
      }),
      alt_description: PropTypes.string,
    })
  ).isRequired,
  currentId: PropTypes.string.isRequired,
};

export default SlideShow;
