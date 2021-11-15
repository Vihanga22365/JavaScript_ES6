//------------------------------------------------------
//---------------------- Argument Object -----------------------
//------------------------------------------------------

function salary(salary) {
    console.log(arguments);
    console.log(arguments[3]);
}

salary(60000,50000,90000,20000);

//------------------------------------------------------
//---------------------- Rest Parameter -----------------------
//------------------------------------------------------

function marks(...mark) { // Use ... for front
    console.log(mark); // That type is array
    console.log(mark[2]); // We can access 
}

marks(10,55,60,40);