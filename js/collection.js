const commonCollection = document.getElementById('commonCollection');
const uncommonCollection = document.getElementById('uncommonCollection');
const rareCollection = document.getElementById('rareCollection');
const legendaryCollection = document.getElementById('legendaryCollection');
const resetButton = document.getElementById('resetButton');
const resetModal = document.getElementById('resetModal');
const cancelResetButton = document.getElementById('cancelResetButton');
const confirmResetButton = document.getElementById('confirmResetButton');

let discoveredItems = JSON.parse(localStorage.getItem('discoveredItems')) || [];

let allItems = [
    'Brown Stone',
    'Dusty Pebble',
    'Cracked Stone',
    'Quartz Cluster',
    'Frost Shard',
    'Solar Ore',
    'Meteor Fragment',
    'Nebula Fragment',
    'Void Fragment',
    'Ancient Star Relic',
    'Celestial Relic',
    'Eclipse Relic'
];

let commonItems = ['Brown Stone', 'Dusty Pebble', 'Cracked Stone'];
let uncommonItems = ['Quartz Cluster', 'Frost Shard', 'Solar Ore'];
let rareItems = ['Meteor Fragment', 'Nebula Fragment', 'Void Fragment'];
let legendaryItems = ['Ancient Star Relic', 'Celestial Relic', 'Eclipse Relic'];

for (let i = 0; i < allItems.length; i++) {
    const itemElement = document.createElement('p');

    if (discoveredItems.includes(allItems[i])) {
        itemElement.textContent = allItems[i];
    } else {
        itemElement.textContent = '???';
    }

    itemElement.classList.add('collectionItem');
    if (commonItems.includes(allItems[i])) {
        itemElement.classList.add('common');
        commonCollection.appendChild(itemElement);
    }

    if (uncommonItems.includes(allItems[i])) {
        itemElement.classList.add('uncommon');
        uncommonCollection.appendChild(itemElement);
    }

    if (rareItems.includes(allItems[i])) {
        itemElement.classList.add('rare');
        rareCollection.appendChild(itemElement);
    }

    if (legendaryItems.includes(allItems[i])) {
        itemElement.classList.add('legendary');
        legendaryCollection.appendChild(itemElement);
    }
}

resetButton.addEventListener('click', function () {
    resetModal.style.display = 'flex';
});

cancelResetButton.addEventListener('click', function () {
    resetModal.style.display = 'none';
});

confirmResetButton.addEventListener('click', function () {
    localStorage.removeItem('discoveredItems');
    location.reload();
});