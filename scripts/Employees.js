import { getEmployees } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let employeeHtml = "<ul>"

    for (const employee of employees) {
        employeeHtml += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    employeeHtml += "</ul>"

    return employeeHtml
}

