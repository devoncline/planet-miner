const mineButton = document.getElementById('mineButton');
const mineResult = document.getElementById('miningResult');
const asteroid = document.getElementById('asteroid');
const impactFlash = document.getElementById('impactFlash');

let currentDirection;

function launchAsteroid() {
    asteroid.style.animation = 'none';
    void asteroid.offsetWidth;

    let directions = ['right', 'left', 'bottom'];
    currentDirection = directions[Math.floor(Math.random() * directions.length)];

    if (currentDirection === 'right') {
        asteroid.style.animation = 'asteroidCrashRight 3s linear';
    } else if (currentDirection === 'left') {
        asteroid.style.animation = 'asteroidCrashLeft 3s linear';
    } else {
        asteroid.style.animation = 'asteroidCrashBottom 3s linear';
    }
}
launchAsteroid();

asteroid.addEventListener('animationend', function () {
    if (currentDirection === 'right') {
    impactFlash.style.left = '410px';
    impactFlash.style.top = '160px';
} else if (currentDirection === 'left') {
    impactFlash.style.left = '270px';
    impactFlash.style.top = '160px';
} else {
    impactFlash.style.left = '335px';
    impactFlash.style.top = '225px';
}

    impactFlash.style.display = 'block';
    mineButton.style.display = 'inline-block';
});

let commonRocks = 0;
let uncommonCrystals = 0;
let rareFragments = 0;
let legendaryRelics = 0;

let commonItems = ['Brown Stone', 'Dusty Pebble', 'Cracked Stone'];
let uncommonItems = ['Quartz Cluster', 'Frost Shard', 'Solar Ore'];
let rareItems = ['Meteor Fragment', 'Nebula Fragment', 'Void Fragment'];
let legendaryItems = ['Ancient Star Relic', 'Celestial Relic', 'Eclipse Relic'];

let discoveredItems = JSON.parse(localStorage.getItem('discoveredItems')) || [];

mineButton.addEventListener('click', function () {
    mineButton.style.display = 'none';
    const randomNumber = Math.random();

    if (randomNumber < 0.60) {
        const randomIndex = Math.floor(Math.random() * commonItems.length);
        const item = commonItems[randomIndex];

        if (item[0] === 'A' || item[0] === 'E' || item[0] === 'I' || item[0] === 'O' || item[0] === 'U') {
            mineResult.textContent = 'You found an ' + item + '!';
        } else {
            mineResult.textContent = 'You found a ' + item + '!';
        }

        commonRocks++;

        if (!discoveredItems.includes(item)) {
            discoveredItems.push(item);
            localStorage.setItem('discoveredItems', JSON.stringify(discoveredItems));
        }

    } else if (randomNumber < 0.85) {
        const randomIndex = Math.floor(Math.random() * uncommonItems.length);
        const item = uncommonItems[randomIndex];

        if (item[0] === 'A' || item[0] === 'E' || item[0] === 'I' || item[0] === 'O' || item[0] === 'U') {
            mineResult.textContent = 'You found an ' + item + '!';
        } else {
            mineResult.textContent = 'You found a ' + item + '!';
        }

        uncommonCrystals++;

        if (!discoveredItems.includes(item)) {
            discoveredItems.push(item);
            localStorage.setItem('discoveredItems', JSON.stringify(discoveredItems));
        }

    } else if (randomNumber < 0.95) {
        const randomIndex = Math.floor(Math.random() * rareItems.length);
        const item = rareItems[randomIndex];

        if (item[0] === 'A' || item[0] === 'E' || item[0] === 'I' || item[0] === 'O' || item[0] === 'U') {
            mineResult.textContent = 'You found an ' + item + '!';
        } else {
            mineResult.textContent = 'You found a ' + item + '!';
        }

        rareFragments++;

        if (!discoveredItems.includes(item)) {
            discoveredItems.push(item);
            localStorage.setItem('discoveredItems', JSON.stringify(discoveredItems));
        }

    } else {
        const randomIndex = Math.floor(Math.random() * legendaryItems.length);
        const item = legendaryItems[randomIndex];

        if (item[0] === 'A' || item[0] === 'E' || item[0] === 'I' || item[0] === 'O' || item[0] === 'U') {
            mineResult.textContent = 'You found an ' + item + '!';
        } else {
            mineResult.textContent = 'You found a ' + item + '!';
        }

        legendaryRelics++;

        if (!discoveredItems.includes(item)) {
            discoveredItems.push(item);
            localStorage.setItem('discoveredItems', JSON.stringify(discoveredItems));
        }
    }
    launchAsteroid();
});