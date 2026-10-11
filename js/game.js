const mineButton = document.getElementById('mineButton');
const mineResult = document.getElementById('miningResult');
const asteroid = document.getElementById('asteroid');

let directions = ['right', 'left', 'bottom'];
let randomDirection = directions[Math.floor(Math.random() * directions.length)];

if (randomDirection === 'right') {
    asteroid.style.animation = 'asteroidCrashRight 3s linear';
} else if (randomDirection === 'left') {
    asteroid.style.animation = 'asteroidCrashLeft 3s linear';
} else {
    asteroid.style.animation = 'asteroidCrashBottom 3s linear';
}

asteroid.addEventListener('animationend', function () {
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
});

