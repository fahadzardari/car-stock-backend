export const setCarImages = (car) => {
  if (car.image1) {
    const arrayBuffer1 = Buffer.from(car.image1, "base64");
    car.image1 = arrayBuffer1;
  }
  if (car.image2) {
    const arrayBuffer2 = Buffer.from(car.image2, "base64");
    car.image2 = arrayBuffer2;
  }
  if (car.image3) {
    const arrayBuffer3 = Buffer.from(car.image3, "base64");
    car.image3 = arrayBuffer3;
  }
  if (car.image4) {
    const arrayBuffer4 = Buffer.from(car.image4, "base64");
    car.image4 = arrayBuffer4;
  }
  if (car.image5) {
    const arrayBuffer5 = Buffer.from(car.image5, "base64");
    car.image5 = arrayBuffer5;
  }
  if (car.image6) {
    const arrayBuffer6 = Buffer.from(car.image6, "base64");
    car.image6 = arrayBuffer6;
  }
  if (car.image7) {
    const arrayBuffer7 = Buffer.from(car.image7, "base64");
    car.image7 = arrayBuffer7;
  }
  if (car.image8) {
    const arrayBuffer8 = Buffer.from(car.image8, "base64");
    car.image8 = arrayBuffer8;
  }
  if (car.image9) {
    const arrayBuffer9 = Buffer.from(car.image9, "base64");
    car.image9 = arrayBuffer9;
  }
  if (car.image10) {
    const arrayBuffer10 = Buffer.from(car.image10, "base64");
    car.image10 = arrayBuffer10;
  }

  console.log(car);
  return car;
};
