const imagePath = "../images/";

const imageJson = [
  {
    name: "danielle-bakery-video",
    url: imagePath + "danielle-bakery-video.mp4",
    className: "play-video",
    alt: "Danielle's bakery showcase"
  }, {
    name: "database-crawler-video",
    url: imagePath + "database-crawler-video.mp4",
    className: "play-video",
    alt: "database crawler showcase"
  }, {
    name: "fun-finder-video",
    url: imagePath + "fun-finder-video.mp4",
    className: "play-video",
    alt: "fun finder showcase"
  }, {
    name: "memory-clicker-video",
    url: imagePath + "memory-clicker-video.mp4",
    className: "play-video",
    alt: "memory clicker showcase"
  }, {
    name: "employee-organizer-video",
    url: imagePath + "employee-organizer-video.mp4",
    className: "play-video",
    alt: "employee organizer showcase"
  }, {
    name: "random-password-generator-video",
    url: imagePath + "random-password-generator-video.mp4",
    className: "play-video",
    alt: "random password generator showcase"
  }
];

function searchObj(value) {
  let result = null;
  imageJson.forEach(function (ele) {
    if (ele.name === value) {
      result = ele;
    }
  });
  return result;
}

function getImg(props, srcOnly) {

  const img = searchObj(props.imgName);

  return (
    <>
      <img className={img?.className} src={img.url} alt={img.alt} width={img?.width} height={img?.height} loading="lazy" />
    </>
  );
}



export default getImg;
