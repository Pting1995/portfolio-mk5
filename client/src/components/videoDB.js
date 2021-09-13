const imagePath = "../videos/";

const imageJson = [
  {
    name: "pindrop-video",
    url: imagePath + "pindrop.mp4",
    className: "play-video",
    alt: "Pindrop Network Landing Page showcase"
  }, {
    name: "danielle-bakery-video",
    url: imagePath + "danielle-bakery.mp4",
    className: "play-video",
    alt: "Danielle's bakery showcase"
  }, {
    name: "database-crawler-video",
    url: imagePath + "database-crawler.mp4",
    className: "play-video",
    alt: "database crawler showcase"
  }, {
    name: "fun-finder-video",
    url: imagePath + "fun-finder.mp4",
    className: "play-video",
    alt: "fun finder showcase"
  }, {
    name: "memory-clicker-video",
    url: imagePath + "memory-clicker.mp4",
    className: "play-video",
    alt: "memory clicker showcase"
  }, {
    name: "employee-organizer-video",
    url: imagePath + "employee-organizer.mp4",
    className: "play-video",
    alt: "employee organizer showcase"
  }, {
    name: "random-password-generator-video",
    url: imagePath + "random-password-generator.mp4",
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

function getVideo(props) {

  const img = searchObj(props.videoName);

  return (
    <>

      <video controls autoPlay muted>
        <source src={img.url} height="800" width="1500" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}



export default getVideo;
