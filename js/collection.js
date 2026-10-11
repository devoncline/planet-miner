const collection = document.getElementById("collectionList");
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
    }

    if (uncommonItems.includes(allItems[i])) {
        itemElement.classList.add('uncommon');
    }

    if (rareItems.includes(allItems[i])) {
        itemElement.classList.add('rare');
    }

    if (legendaryItems.includes(allItems[i])) {
        itemElement.classList.add('legendary');
    }

    collection.appendChild(itemElement);
}