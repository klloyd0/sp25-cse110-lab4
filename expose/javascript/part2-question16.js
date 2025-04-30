for (let car in statisics) {
    if (car[0] === 'r' || statisics[car] % 2 === 1) {
        console.log(car);
    }
}