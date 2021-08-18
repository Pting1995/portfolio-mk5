const imagePath = "../images/";

const imageJson = [
  {
    name: "itme",
    url: imagePath + "purrito.png",
    alt: "Picture of Peter"
  }, {
    name: "danielle-bakery-png",
    url: imagePath + "danielle-bakery-png.png",
    className: "static-img",
    alt: "Danielle's bakery showcase"
  }, {
    name: "database-crawler-png",
    url: imagePath + "database-crawler-png.png",
    className: "static-img",
    alt: "database crawler showcase"
  }, {
    name: "fun-finder-png",
    url: imagePath + "fun-finder-png.png",
    className: "static-img",
    alt: "fun finder showcase"
  }, {
    name: "memory-clicker-png",
    url: imagePath + "memory-clicker-png.png",
    className: "static-img",
    alt: "memory clicker showcase"
  }, {
    name: "employee-organizer-png",
    url: imagePath + "employee-organizer-png.png",
    className: "static-img",
    alt: "employee organizer showcase"
  }, {
    name: "random-password-generator-png",
    url: imagePath + "random-password-generator-png.png",
    className: "static-img",
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
