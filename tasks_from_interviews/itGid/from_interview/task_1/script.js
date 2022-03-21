// https://www.youtube.com/watch?v=zY9Wn4MCAoI&list=PLM7wFzahDYnGmYXTzmw-vTE9tSm8qr5cY&index=4

const array = [{color: 'white', id: 2}, {color: 'black', id: 3}, {color: 'black', id: 4}];

let output = {};
function setObj () {
    array.forEach(obj => {
        // if the key does not exist
        if(!(obj.color in output)) {
            output[obj.color] = {[obj.id]: obj};
            // check same id     
        } else if(!(obj.id in output[obj.color])) {
            output[obj.color][obj.id] = obj              
        }
    });
    console.log(output);
}
setObj();