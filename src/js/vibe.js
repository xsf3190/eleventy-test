const vibes = ['one','two','three'];

let x = Math.random(), y = Math.floor(x), z = Math.floor(vibes.length);

console.log("1",Math.floor(Math.random()));
console.log("2",Math.floor(vibes.length));

let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe)