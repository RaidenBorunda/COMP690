const $ = (id) => document.getElementById(id);

let empID =    $("id");
let fullName =      $("name");
let ext =     $("ext");
let email =         $("email");
let department =    $("department");

empForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('8-Digit Employee ID:', empID.value);
    console.log('Full Name:', fullName.value);
    console.log('4-Digit Extension:', ext.value);
    console.log('Email:', email.value);
    console.log('Department:', department.value);
});
