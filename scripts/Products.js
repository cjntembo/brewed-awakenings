import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let ProductsHTML = "<ul>"

    for (const product of products) {
        ProductsHTML += `<li id="product--${product.id}">${product.name}</li>`
    }

    ProductsHTML += "</ul>"

    return ProductsHTML
}

