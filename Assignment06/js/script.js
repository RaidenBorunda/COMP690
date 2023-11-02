// DOM HANDLER FUNCTION
const $ = (id) => document.getElementById(id)

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let table = document.getElementById('employees')
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = document.getElementById('empCount')
let empCounter = 0
empCount.innerHTML = `${empCounter}`

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id          = document.getElementById('id').value
    let name        = document.getElementById('name').value
    let extension   = document.getElementById('extension').value
    let email       = document.getElementById('email').value
    let department  = document.getElementById('department').value
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow(-1)
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = row.insertCell(0)
    let cellName = row.insertCell(1)
    let cellExtension = row.insertCell(2)
    let cellEmail = row.insertCell(3)
    let cellDepartment = row.insertCell(4)
    let deleteCell = row.insertCell(5);
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textId = document.createTextNode(id)
    let textName = document.createTextNode(name)
    let textExtension = document.createTextNode(extension)
    let textEmail = document.createTextNode(email)
    let textDepartment = document.createTextNode(department)

    cellId.appendChild(textId)
    cellName.appendChild(textName)
    cellExtension.appendChild(textExtension)
    cellEmail.appendChild(textEmail)
    cellDepartment.appendChild(textDepartment)
    
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-small float-right delete'
    let rowDelete = document.createTextNode('X')
    deleteBtn.appendChild(rowDelete)
    deleteCell.appendChild(deleteBtn)
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCounter++
    empCount.innerHTML = `${empCounter}`
})

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    // CHECK AND SEE IF THE DELETE BUTTON WAS CLICKED
    if (e.target.classList.contains('delete')) {
        // DISPLAY CONFIRMATION OF THE DELETE TO THE USER
        if (confirm('Are you sure you want to delete this employee?')) {
            // REMOVE THE SELECTED LI
            let rowIndex = e.target.closest('tr').rowIndex
            table.deleteRow(rowIndex)
            empCounter--
            empCount.innerHTML = `${empCounter}`

        }
    }
})