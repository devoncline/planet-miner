const mineButton = document.getElementById('mineButton');
const mineResult = document.getElementById('miningResult');

let commonRocks = 0;
let uncommonCrystals = 0;
let rareFragments = 0;
let legendaryRelics = 0;

let commonItems = ['Brown Stone', 'Dusty Pebble', 'Cracked Stone'];
let uncommonItems = ['Quartz Cluster', 'Frost Shard', 'Solar Ore'];
let rareItems = ['Meteor Fragment', 'Nebula Fragment', 'Void Fragment'];
let legendaryItems = ['Ancient Star Relic', 'Celestial Relic', 'Eclipse Relic'];

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
    } else if (randomNumber < 0.85) {
        const randomIndex = Math.floor(Math.random() * uncommonItems.length);
        const item = uncommonItems[randomIndex];

        if (item[0] === 'A' || item[0] === 'E' || item[0] === 'I' || item[0] === 'O' || item[0] === 'U') {
            mineResult.textContent = 'You found an ' + item + '!';
        } else {
            mineResult.textContent = 'You found a ' + item + '!';
        }

        uncommonCrystals++;
    } else if (randomNumber < 0.95) {
        const randomIndex = Math.floor(Math.random() * rareItems.length);
        const item = rareItems[randomIndex];

        if (item[0] === 'A' || item[0] === 'E' || item[0] === 'I' || item[0] === 'O' || item[0] === 'U') {
            mineResult.textContent = 'You found an ' + item + '!';
        } else {
            mineResult.textContent = 'You found a ' + item + '!';
        }

        rareFragments++;
    } else {
        const randomIndex = Math.floor(Math.random() * legendaryItems.length);
        const item = legendaryItems[randomIndex];

        if (item[0] === 'A' || item[0] === 'E' || item[0] === 'I' || item[0] === 'O' || item[0] === 'U') {
            mineResult.textContent = 'You found an ' + item + '!';
        } else {
            mineResult.textContent = 'You found a ' + item + '!';
        }

        legendaryRelics++;
    }
});

