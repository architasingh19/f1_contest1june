let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(function(element){
        if(element.profession==="developer"){
            console.log(element);
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(element){
        if(element.profession==="developer"){
            console.log(element);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let newEmployeeObject = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newEmployeeObject);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter((element)=>{
        if(element.profession!=="admin"){
            console.log(element);
        }
    })
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let employees=[
        { id: 5, name: "jill", age: "117", profession: "developer" },
        { id: 6, name: "jacky", age: "21", profession: "developer" },
        { id: 7, name: "krish", age: "20", profession: "intern" },
    ];
    let addEmployee = arr.concat(employees);
    console.log(addEmployee);
  }