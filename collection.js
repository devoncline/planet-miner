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

for (let i = 0; i < allItems.length; i++) {
    const itemElement = document.createElement('p');

    if (discoveredItems.includes(allItems[i])) {
        itemElement.textContent = allItems[i];
    } else {
        itemElement.textContent = '???';
    }
    collection.appendChild(itemElement);
}