import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const Products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
const findProduct = (order, products) => {
    let orderProduct = null

    for (const product of products) {
        if (product.id === order.productId) {
            orderProduct = product
        }
    }

    return orderProduct
}

// Function whose responsibility is to find the employee for an order
const findEmployee = (order, employees) => {
    let orderEmployee = null

    for (const employee of employees) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee
        }
    }

    return orderEmployee
}

export const Orders = () => {
    let OrderHTML = ""
    OrderHTML = "<ul>"

    for (const currentOrder of orders) {
        const currentEmployee = findEmployee(currentOrder, employees)
        const currentProduct = findProduct(currentOrder, Products)

        OrderHTML += `<li>${currentProduct.name} was sold by ${currentEmployee.name} on ${new Date(currentOrder.timestamp).toLocaleDateString()}</li>`
    }

    OrderHTML += "</ul>"

    return OrderHTML
}

