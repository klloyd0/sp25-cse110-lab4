let currentTime = () => {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
};

// Modify this code such that the program prints out the current time every second.
setInterval(currentTime, 1000);