// CREATE AN ARRAY OF EMPLOYEES

if (localStorage.getItem('employees') !== null) {
    // Storage object exists
    // Retrieve the object from storage
    employees = JSON.parse(localStorage.getItem('employees'));
} else {
// let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees = [
        {
            id: 111,
            name: 'Bob Jenkins',
            extension: 4789,
            email:'Bob.Jenkins@xmark.com',
            department: 'Engineering'
        },
        {
            id: 123,
            name: 'Charles Davis',
            extension: 5230,
            email:'Charles.Davis@xmark.com',
            department: 'Executive'
        },    
        {
            id: 111,
            name: 'Danny Duncan',
            extension: 6901,
            email:'Danny.Duncan@xmark.com',
            department: 'Marketing'
        },    
        {
            id: 203,
            name: 'Sally Summer',
            extension: 2395,
            email:'Sally.Summer@xmark.com',
            department: 'Quality Assurance'
        },    
        {
            id: 128,
            name: 'Jason Bulgolgi',
            extension: 1289,
            email:'Jason.Bulgolgi@xmark.com',
            department: 'Accounting'
        },
    ]
    localStorage.setItem('employees', JSON.stringify(employees));
}

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY


// GET DOM ELEMENTS
const $ = (id) => document.getElementById(id)
$('id').focus()
let form = document.getElementById('addForm')
let table = document.getElementById('empTable')
let tbody = table.getElementsByTagName('tbody')[0]

let empCount = document.getElementById('empCount')
let empCounter = employees.length
empCount.innerHTML = `${empCounter}`

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS

for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];
    let row = tbody.insertRow(i);
    let idCell = row.insertCell(0);
    let nameCell = row.insertCell(1);
    let extCell = row.insertCell(2);
    let emailCell = row.insertCell(3);
    let departmentCell = row.insertCell(4);
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-small float-right delete'
    deleteBtn.innerHTML = 'x'; 
    row.insertCell(5).appendChild(deleteBtn);

    idCell.innerHTML = employee.id;
    nameCell.innerHTML = employee.name;
    extCell.innerHTML = employee.extension;
    emailCell.innerHTML = employee.email;
    departmentCell.innerHTML = employee.department;
}

document.getElementById('empCount').innerHTML = employees.length;

employees = JSON.parse(localStorage.getItem('employees')) || [];


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let newId          = document.getElementById('id').value
    let newName        = document.getElementById('name').value
    let newExtension   = document.getElementById('extension').value
    let newEmail       = document.getElementById('email').value
    let newDepartment  = document.getElementById('department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push({
        id: newId, 
        name: newName, 
        extension: newExtension, 
        email: newEmail, 
        department: newDepartment
        })
    localStorage.setItem('employees', JSON.stringify(employees));

    location.reload();
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.closest('tr').rowIndex

        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex - 1, 1)
        empTable.deleteRow(rowIndex)
        localStorage.setItem('employees', JSON.stringify(employees));

}}});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    document.getElementById("empTable").deleteRow(employees.length);

    let id          = document.getElementById('id').value
    let name        = document.getElementById('name').value
    let extension   = document.getElementById('extension').value
    let email       = document.getElementById('email').value
    let department  = document.getElementById('department').value
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    row = table.insertRow(-1)
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
    deleteBtn = document.createElement('button')
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
    localStorage.setItem('employees', JSON.stringify(employees));

    for(let i = 0; i < employees.length; i++) {
        let row = table.insertRow(-1);
        row.insertCell(0).innerHTML = employees[i].id
        row.insertCell(1).innerHTML = employees[i].name
        row.insertCell(2).innerHTML = employees[i].extension
        row.insertCell(3).innerHTML = employees[i].email
        row.insertCell(4).innerHTML = employees[i].department
        let deleteBtn = document.createElement('button')
        deleteBtn.className = 'btn btn-danger btn-small float-right delete'
        deleteBtn.innerHTML = 'x'; 
        row.insertCell(5).appendChild(deleteBtn);
        localStorage.setItem('employees', JSON.stringify(employees));
    }
    
    document.body.append(table);
    $('id').focus()
}