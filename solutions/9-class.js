import _ from 'lodash';

// BEGIN
export default class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item, count) {
        this.items.push({ item, count });
    }

    getItems() {
        return this.items;
    }

    getCost() {
        return this.items.reduce((total, { item, count }) => {
            return total + item.price * count;
        }, 0);
    }

    getCount() {
        return this.items.reduce((total, { count }) => {
            return total + count;
        }, 0);
    }
}
// END
