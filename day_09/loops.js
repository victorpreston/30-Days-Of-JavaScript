for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);

    for (let j = 0; j < 3; j++) {
        console.log("Nested iteration number: " + j);
    }


    if (i % 2 === 0) {
        console.log("Even iteration");
    } else {
        console.log("Odd iteration");
    }
}
for (let i = 0; i < 3; i++) {
    console.log("Outer iteration number: " + i);

    for (let j = 0; j < 2; j++) {
        console.log("Inner iteration number: " + j);

        for (let k = 0; k < 4; k++) {
            console.log("Nested iteration number: " + k);
        }
    }

    if (i % 2 === 0) {
        console.log("Even iteration");
    } else {
        console.log("Odd iteration");
    }
}