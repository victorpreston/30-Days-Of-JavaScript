// Define a function to calculate the area of different shapes
function calculateArea(shape, ...args) {
    let area;

    switch (shape) {
        case 'circle':
            const [radius] = args;
            area = Math.PI * radius * radius;
            break;

        case 'rectangle':
            const [length, width] = args;
            area = length * width;
            break;

        case 'triangle':
            const [base, height] = args;
            area = (base * height) / 2;
            break;

        default:
            area = 'Invalid shape';
    }

    return area;
}

// Calculate the area of a circle
const circleArea = calculateArea('circle', 5);
console.log('Circle Area:', circleArea);

// Calculate the area of a rectangle
const rectangleArea = calculateArea('rectangle', 4, 6);
console.log('Rectangle Area:', rectangleArea);

// Calculate the area of a triangle
const triangleArea = calculateArea('triangle', 3, 8);
console.log('Triangle Area:', triangleArea);

// Calculate the area of an invalid shape
const invalidShapeArea = calculateArea('square', 5);
console.log('Invalid Shape Area:', invalidShapeArea);