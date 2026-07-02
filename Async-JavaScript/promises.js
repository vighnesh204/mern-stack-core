// promises kya hai ?

const parchi = new Promise((resolve, reject) => {
    fetch('https://randomuser.me/api/')
    .then(raw => raw.json())
    .then(result => {
        if(result.results[0].gender === "male") resolve();
        else reject();
    })
})

parchi
.then(() => {
    console.log("Green button daba");
})
.catch(() => {
    console.log("Red button daba");
})

