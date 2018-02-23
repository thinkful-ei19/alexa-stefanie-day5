const STORE = [
  {name: 'apples', checked: false},
  {name: 'oranges', checked: false},
  {name: 'milk', checked: true},
  {name: 'bread', checked: false}
];

function generateItemElement(item, itemIndex, template) {
    return `
    <li>${item.name}</li>`;
}

function generateShoppingItemsString(shoppingList) {
    console.log("Generating shopping list element");
    
    const items = shoppingList.map((item, index) => generateItemElement(item, index));
    
    return items.join('');
}
  
function renderShoppingList() {
//For each item in STORE, generate a string representing an <li> with:
//  the item name rendered as inner text
  //the item's index in the STORE set as a data attribute on the <li> (more on that in a moment)
  //the item's checked state (true or false) rendered as the presence or absence of a CSS class for indicating checked items (specifically, .shopping-item__checked from index.css)
  //Join together the individual item strings intoert the <li>s string inside the .js-shopping-list <ul> in one long string
  // Ins the DOM.
  console.log('renderShoppingList works');
  const shoppingListItemsString = generateShoppingItemsString(STORE);
    // insert that HTML into the DOM
    $('.js-shopping-list').html(shoppingListItemsString);
}


function handleNewItemSubmit() {
// You should be able to add items to the list
  consoloe.log('handleNewItemSubmit works');
}

function handleItemCheckClicked() {
// You should be able to check items on the list
  console.log('handleItemCheckClicked works');
}

function handleDeleteItemClicked() {
// You should be able to delete items from the list
  console.log('handleDeleteItemClicked works');
}

function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();
}

$(handleShoppingList);

