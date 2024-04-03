function openRegister(){
	open("register.html")
}
let selectedRow = null;
function fetchData(){

	let obj = {}
	if(selectedRow == null)
	{
		
	obj.name = document.getElementById('name').value;
	obj.empId = document.getElementById('empId').value;
	obj.address =  document.getElementById('address').value;
	obj.designation = document.getElementById('designation').value;
	
	displayData(obj);
	clearFields(obj);
	}else{
		update(); 
		clearFields(obj);
		}
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
	newCell5.innerHTML = `<button type="button" id="edit" onclick="editData(this)">Edit</button>
							<button type="button" id="delete" onclick="deleteData(this)">Delete</button>`;
}
function clearFields(obj){
	document.getElementById('name').value = "" ;
	document.getElementById('empId').value = "" ;
	document.getElementById('address').value = "" ;
	document.getElementById('designation').value = "" ;
}
function editData(ele){
	selectedRow = ele.parentElement.parentElement
	document.getElementById('name').value = selectedRow.cells[0].innerHTML; 
	document.getElementById('empId').value = selectedRow.cells[1].innerHTML; 
	document.getElementById('address').value = selectedRow.cells[2].innerHTML; 
	document.getElementById('designation').value = selectedRow.cells[3].innerHTML; 
	
}
function update(){
	// console.log("helloo")
	selectedRow.cells[0].innerHTML = document.getElementById('name').value;
	selectedRow.cells[1].innerHTML = document.getElementById('empId').value;
	selectedRow.cells[2].innerHTML = document.getElementById('address').value;
	selectedRow.cells[3].innerHTML = document.getElementById('designation').value;
	selectedRow = null;
}
document.addEventListener("mousemove",parallax);
function parallax(event){

	document.querySelectorAll(".object").forEach((move)=>{

		let moving_value = move.getAttribute("data-value");
		let x = (event.clientX * moving_value) / 250;
		let y = (event.clientY * moving_value) / 250;

		// console.log(x);

		move.style.transform = "translateX("+ x +"px) translateY("+ y +"px)"
	})
}