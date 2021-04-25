import * as fs from "fs/promises";
const ECOMMERCE_FILE = "./src/ecommerce/ecommerceDB.json";

export async function loginUser(loginInfo) {
  let itemArray = await getAll();
  let users = itemArray.users;
  let userIndex = findUser(users, loginInfo.email);
  if (userIndex == -1)
    throw new Error(
      `User with Id:${newUser.email} doesn't exists`
    );
  if (users[userIndex].password === loginInfo.password)
      return true;
}

export async function getAll(){
  try {
    let itemsTxt = await fs.readFile(ECOMMERCE_FILE);
    let items = JSON.parse(itemsTxt);
    return items;
  } catch (err) {
    if (err.code === "ENOENT") {
      // file does not exits
      await save([]); // create a new file with empty array
      return []; // return empty array
    } // // cannot handle this exception, so rethrow
    else throw err;
  }
}
// save array of items to file
async function save(items = []) {
  let itemsTxt = JSON.stringify(items);
  await fs.writeFile(ECOMMERCE_FILE, itemsTxt);
}

// test function for item ID
function findUser(userArray, Id) {
  return userArray.findIndex(
    (user) => user.email === Id
  );
}

// test function for item ID
function findProduct(productArray, Id) {
  return productArray.findIndex(
    (product) => product.tags === Id
  );
}

 // test function for item ID
function findCategory(categoryArray, Id) {
  return categoryArray.findIndex(
    (category) => category.Id === Id
  );
}

function findProductsInCategory(products, category) {
  let filteredProducts = [];
  products.forEach(product => {
      if(product.tags.includes(category)) {
        filteredProducts.push(product);
      }
    });
    return filteredProducts;
}

// get user by ID
export async function getUserByID(itemId) {
  let itemArray = await getAll();
  let users = itemArray.users;
  let index = findUser(users, itemId);
  if (index === -1)
    throw new Error(`Item with ID:${itemId} doesn't exist`);
  else return users[index];
}

// get produt by ID
export async function getProductByID(itemId) {
  let itemArray = await getAll();
  let products = itemArray.products;
  let index = findProduct(products, itemId);
  if (index === -1)
    throw new Error(`Item with ID:${itemId} doesn't exist`);
  else return products[index];
}

// get produt by category
export async function getProductByCategory(category) {
  let itemArray = await getAll();
  let products = itemArray.products;
  //let index = findCategory(itemArray.categories, category);
  //let subCategories = itemArray.categories[index].types;
  let filteredProducts = findProductsInCategory(products, category);
  if (filteredProducts.length === 0)
    throw new Error(`There is no products in category:${category}`);
  else return filteredProducts;
}


// get products
export async function getProducts() {
  let itemArray = await getAll();
  let products = itemArray.products;
  if (products === null)
    throw new Error(`Products don't exist`);
  else return products;
}

// create a new user
export async function addUser(newUser) {
  let itemArray = await getAll();
  let users = itemArray.users;
  if (findUser(users, newUser.email) !== -1)
    throw new Error(
      `User with Id:${newUser.email} already exists`
    );
    users.push(newUser);
  await save(users);
}

// update existing item
export async function updateBasketOfUser(email, newBasket) {
  let itemArray = await getAll();
  let users = itemArray.users;
  let index = findUser(users, email); // findIndex
  if (index === -1)
    throw new Error(`Customer with ID:${email} doesn't exist`);
  else {
    users[index].basket = newBasket.basket;
    await save(itemArray);
  }
}

// get category by ID
export async function getCategoryByID(itemId) {
  let itemArray = await getAll();
  let categories = itemArray.categories;
  let index = findCategory(categories, itemId);
  if (index === -1)
    throw new Error(`Category with ID:${itemId} doesn't exist`);
  else return categories[index];
}

// get categories
export async function getCategories() {
  let itemArray = await getAll();
  let categories = itemArray.categories;
  if (categories === null)
    throw new Error(`Categories don't exist`);
  else return categories;
}