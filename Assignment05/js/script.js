const $ = (id) => document.getElementById(id);

let employeeID =    $("id");
let fullName =      $("name");
let extension =     $("ext");;
let email =         $("email");
let department =    $("department");
let submitButton =  $("submit")
let empForm =       $("empForm");

empForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('8-Digit Employee ID:', employeeID.value);
    console.log('Full Name:', fullName.value);
    console.log('4-Digit Extension:', extension.value);
    console.log('Email:', email.value);
    console.log('Department:', department.value);
});
