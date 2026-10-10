const mineButton = document.getElementById('mineButton');
const mineResult = document.getElementById('miningResult');

let commonRocks = 0;
let uncommonCrystals = 0;
let rareFragments = 0;
let legendaryRelics = 0;

mineButton.addEventListener('click', function () {
    const randomNumber = Math.random();

    if (randomNumber < 0.60) {
        mineResult.textContent = 'You found a Common Rock!';
        commonRocks++;
    } else if (randomNumber < 0.85) {
        mineResult.textContent = 'You found an Uncommon Crystal!';
        uncommonCrystals++;
    } else if (randomNumber < 0.95) {
        mineResult.textContent = 'You found a Rare Meteor Fragment!';
        rareFragments++;
    } else {
        mineResult.textContent = 'You found a Legendary Ancient Relic!';
        legendaryRelics++;
    }
});

