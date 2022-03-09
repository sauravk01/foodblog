// export const singleImageUploadHandler = (e, setImageInput) => {
//   const file = e.target.files[0];
//   //collecting file in the state to sent backend which is quick then data
//   setImageInput(file);
//   console.log("file", file);
//   //file reader= to get the raw image which can be shown in the browser
//   const fileReader = new FileReader();
//   fileReader.onload = function (e) {
//     // console.log(e.target.result);
//     //when filereader gets the file from the form, it sents to image state to display
//     setImage(e.target.result);
//   };
//   fileReader.readAsDataURL(file);
// };

//images///
//images input file and delete
export const ImageUploadHandler = (e, { images, setImages }) => {
  let newImages = [];
  let num = 0;
  const files = [...e.target.files];

  if (files.length === 0) return console.log("Files does not exist.");

  files.forEach((file) => {
    if (file.size > 1024 * 1024)
      return console.log("The largest image size is 1mb");

    if (file.type !== "image/jpeg" && file.type !== "image/png")
      return console.log("Image format is incorrect.");

    num += 1;
    if (num <= 5) newImages.push(file);
    return newImages;
  });

  const imgCount = images.length;
  if (imgCount + newImages.length > 5)
    return console.log("Select up to 5 images.");

  return setImages([...images, ...newImages]);
};

export const deleteImage = (index, { images, setImages }) => {
  const newArr = [...images];
  newArr.splice(index, 1);
  setImages(newArr);
};
