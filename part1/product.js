export class Product {

    constructor (name, price, listOfTags, description, imageURL) {
        this.name = name;
        this.price = price;
        this.listOfTags = listOfTags;
        this.description = description;
        this.imageURL = imageURL;
    }

    getListOfTags() {
        return this.listOfTags;
    }

    getImageUrl() {
        return this.imageURL;
    }

}

