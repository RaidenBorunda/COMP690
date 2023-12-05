// IMPORT USERS FROM INIT
import { fetchUsers } from '../js/modules/init.js'

// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees')
let empCount    = document.querySelector('#empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
async function buildGrid() {
    const users = await fetchUsers()
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    console.log(users)
    // REBUILDING THE ROW STRUCTURE
    for (let emp of users) {
        tbody.innerHTML += 
        `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.ext}</td>
            <td><a href="mailto:${emp.email}">${emp.email}</a></td>
            <td>${emp.title}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${users.length})`
}

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex)
        }
    }
})
// BUILD THE EMPLOYEE GRID
buildGrid()
