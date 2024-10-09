const this_items = [];

function toString() {
    const captions = [];

    for (i = 0; i < this_items.length; i++) {
        captions.push(this_items[i].toString());
    }

    return captions.join(', ');
}