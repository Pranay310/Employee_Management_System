
let selectedRow = null ;
function openRegister(){
	open("register.html")
}
function fetchData(){
	let obj = {}
	obj.name = document.getElementById('name').value;
	obj.empId = document.getElementById('empId').value;
	obj.address =  document.getElementById('address').value;
	obj.designation = document.getElementById('designation').value;
	
	displayData(obj);
	clearFields(obj);
}
function displayData(ele){

	let tbody = document.getElementById('table-body');
	let newRow = tbody.insertRow(0);

	let newCell1 = newRow.insertCell(0);
	let newCell2 = newRow.insertCell(1);
	let newCell3 = newRow.insertCell(2);
	let newCell4 = newRow.insertCell(3);
	let newCell5 = newRow.insertCell(4);
	newCell1.innerHTML = ele.name;
	newCell2.innerHTML = ele.empId;
	newCell3.innerHTML = ele.address;
	newCell4.innerHTML = ele.designation;
	newCell5.innerHTML = `<button type="button" onclick="editData()">Edit</button>
							<button type="button" onclick="deleteData()">Delete</button>`;
}
function clearFields(obj){
	document.getElementById('name').value = "" ;
	document.getElementById('empId').value = "" ;
	document.getElementById('address').value = "" ;
	document.getElementById('designation').value = "" ;
}
function editData(){

}
