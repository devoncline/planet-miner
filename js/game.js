const mineButton = document.getElementById('mineButton');
const mineResult = document.getElementById('miningResult');
const asteroid = document.getElementById('asteroid');
const impactFlash = document.getElementById('impactFlash');
const continueButton = document.getElementById('continueButton');
const incomingAlert = document.getElementById('incomingAlert');
const impactSound = new Audio('assets/sounds/explosion.wav');
impactSound.volume = 0.2;
const settingsButton = document.getElementById('settingsButton');
const settingsPanel = document.getElementById('settingsPanel');
const sfxToggle = document.getElementById('sfxToggle');
const savedSfxSetting = localStorage.getItem('sfxEnabled');
const musicToggle = document.getElementById('musicToggle');
const savedMusicSetting = localStorage.getItem('musicEnabled');
const backgroundMusic = new Audio('assets/sounds/space-ambient.mp3');

backgroundMusic.volume = .2;
backgroundMusic.loop = true;

if (savedSfxSetting === 'false') {
    sfxToggle.checked = false;
    impactSound.muted = true;
}

if (savedMusicSetting === 'false') {
    musicToggle.checked = false;
}

let currentDirection;

function launchAsteroid() {
    incomingAlert.style.display = 'block';

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
    impactSound.play();
    incomingAlert.style.display = 'none';
    if (currentDirection === 'right') {
        impactFlash.style.left = '350px';
        impactFlash.style.top = '155px';
    } else if (currentDirection === 'left') {
        impactFlash.style.left = '280px';
        impactFlash.style.top = '155px';
    } else {
        impactFlash.style.left = '325px';
        impactFlash.style.top = '185px';
    }

    impactFlash.style.display = 'block';
    setTimeout(function () {
        impactFlash.style.display = 'none';
    }, 350);
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
    mineResult.style.display = 'block';

    const randomNumber = Math.random();

    if (randomNumber < 0.60) {
        const randomIndex = Math.floor(Math.random() * commonItems.length);
        const item = commonItems[randomIndex];

        mineResult.textContent = 'COMMON: ' + item;
        mineResult.className = 'commonResult';

        commonRocks++;

        if (!discoveredItems.includes(item)) {
            discoveredItems.push(item);
            localStorage.setItem('discoveredItems', JSON.stringify(discoveredItems));
        }

    } else if (randomNumber < 0.85) {
        const randomIndex = Math.floor(Math.random() * uncommonItems.length);
        const item = uncommonItems[randomIndex];

        mineResult.textContent = 'UNCOMMON: ' + item;
        mineResult.className = 'uncommonResult';

        uncommonCrystals++;

        if (!discoveredItems.includes(item)) {
            discoveredItems.push(item);
            localStorage.setItem('discoveredItems', JSON.stringify(discoveredItems));
        }

    } else if (randomNumber < 0.95) {
        const randomIndex = Math.floor(Math.random() * rareItems.length);
        const item = rareItems[randomIndex];

        mineResult.textContent = 'RARE: ' + item;
        mineResult.className = 'rareResult';

        rareFragments++;

        if (!discoveredItems.includes(item)) {
            discoveredItems.push(item);
            localStorage.setItem('discoveredItems', JSON.stringify(discoveredItems));
        }

    } else {
        const randomIndex = Math.floor(Math.random() * legendaryItems.length);
        const item = legendaryItems[randomIndex];

        mineResult.textContent = 'LEGENDARY: ' + item;
        mineResult.className = 'legendaryResult';

        legendaryRelics++;

        if (!discoveredItems.includes(item)) {
            discoveredItems.push(item);
            localStorage.setItem('discoveredItems', JSON.stringify(discoveredItems));
        }
    }
    continueButton.style.display = 'inline-block';
});

continueButton.addEventListener('click', function () {
    continueButton.style.display = 'none';
    mineResult.style.display = 'none';
    launchAsteroid();
});

settingsButton.addEventListener('click', function () {
    if (settingsPanel.style.display === 'block') {
        settingsPanel.style.display = 'none';
    } else {
        settingsPanel.style.display = 'block';
    }
});

sfxToggle.addEventListener('change', function () {
    impactSound.muted = !sfxToggle.checked;
    localStorage.setItem('sfxEnabled', sfxToggle.checked);
});

musicToggle.addEventListener('change', function () {
    localStorage.setItem('musicEnabled', musicToggle.checked);

    if (musicToggle.checked) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});

document.addEventListener('click', function startMusic() {
    if (musicToggle.checked) {
        backgroundMusic.play();
    }

    document.removeEventListener('click', startMusic);
});