//Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

const inventory = {
	items: [ 'Knife', 'Gas mask' ],
	add(itemName) {
		this.items.push(itemName);
		console.log(`Adding ${itemName} to inventory`);
	},
	remove(itemName) {
		this.items = this.items.filter((item) => item !== itemName);
		console.log(`Removing ${itemName} from inventory`);
	}
};

const invokeInventoryAction = function(itemName, action) {
	console.log(`Invoking action on ${itemName}`);
};

invokeInventoryAction('Medkit', inventory.add('Medkit'));
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove('Gas mask'));
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
