const welcomeMessage = document.getElementById('welcomeMessage');
const playGame = document.getElementById('playGameLink');
const homeAsteroid = document.getElementById('homeAsteroid');
const homeImpactFlash = document.getElementById('homeImpactFlash');

let homeDirection;

function launchHomeAsteroid() {
    homeAsteroid.style.animation = 'none';
    void homeAsteroid.offsetWidth;

    let directions = ['right', 'left', 'bottom'];
    homeDirection = directions[Math.floor(Math.random() * directions.length)];

    if (homeDirection === 'right') {
        homeAsteroid.style.animation = 'asteroidCrashRight 3s linear';
    } else if (homeDirection === 'left') {
        homeAsteroid.style.animation = 'asteroidCrashLeft 3s linear';
    } else {
        homeAsteroid.style.animation = 'asteroidCrashBottom 3s linear';
    }
}
launchHomeAsteroid();

homeAsteroid.addEventListener('animationend', function () {
    if (homeDirection === 'right') {
        homeImpactFlash.style.left = '350px';
        homeImpactFlash.style.top = '155px';
    } else if (homeDirection === 'left') {
        homeImpactFlash.style.left = '280px';
        homeImpactFlash.style.top = '155px';
    } else {
        homeImpactFlash.style.left = '325px';
        homeImpactFlash.style.top = '185px';
    }

    homeImpactFlash.style.display = 'block';

    setTimeout(function () {
        homeImpactFlash.style.display = 'none';
    }, 350);

    setTimeout(function () {
        launchHomeAsteroid();
    }, 1800);
});

welcomeMessage.textContent = 'Welcome Miner! Get ready to embark on an interstellar adventure. Explore distant planets, mine valuable resources, and build your collection of rare discoveries.';

playGame.addEventListener("click", function () {

});