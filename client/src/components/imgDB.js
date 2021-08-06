const imagePath = "./images/";

const imageJson = [
  {
    name: "itme",
    url: imagePath + "purrito.png",
    alt: "Picture of Peter"
  }, {
    name: "danielle",
    url: imagePath + "danielle-700x350.gif",
    alt: "Danielle's bakery"
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

  if (srcOnly === true) {

    return { backgroundImage: `url(${img.url})` };
  }

  return (
    <>
      <img className={img?.className} src={img.url} alt={img.alt} width={img?.width} height={img?.height} />
    </>
  );
}



export default getImg;
