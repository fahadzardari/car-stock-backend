export const setCarImages = (car) => {
        const arrayBuffer1 = Buffer.from(car.image1, "base64");
        car.image1 = arrayBuffer1;
        if(car.image2){
                const arrayBuffer2 = Buffer.from(car.image2, "base64");
                car.image2 = arrayBuffer2; 
        }
        if(car.image3){
                const arrayBuffer3 = Buffer.from(car.image3, "base64");
                car.image3 = arrayBuffer3;
        }
        if(car.image4){
                const arrayBuffer4 = Buffer.from(car.image4, "base64");
                car.image4 = arrayBuffer4;
        }
        if(car.image5){
                const arrayBuffer5 = Buffer.from(car.image5, "base64");
                car.image5 = arrayBuffer5;
        }
        return car;
}