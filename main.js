// get paraent List
const allTasks = document.querySelector('#book-list ul');

// delete list 

	const btnDel = document.querySelectorAll(".delete");
	// for(let i=0; i<btnDel.length;i++){
	// 	console.log(btnDel[i]);
	// 

	for(let btn of btnDel) {
		btn.addEventListener('click', (e) => {
			let rec = e.target.parentNode;
			let allRec = rec.parentNode;

			allRec.removeChild(rec);
		})
	};

// Add new task (FORM)

	const addForm = document.forms['add-list'];
	addForm.addEventListener('submit',function(e) {
		// console.log("doing click");
		e.preventDefault();
		const formInput = addForm.querySelector('input[type="text"]');
		const newTask = formInput.value;
		
		// create elements (li span span)
		const taskRow = document.createElement('li');

		const newTaskName = document.createElement('span');
		const deleteTask = document.createElement('span');

		// set value
		newTaskName.textContent=newTask;
		deleteTask.textContent='delete';

		// set style 
		newTaskName.classList.add('name');
		deleteTask.classList.add('delete');

		// append chile node
		taskRow.appendChild(newTaskName);
		taskRow.appendChild(deleteTask);

		allTasks.appendChild(taskRow);

		formInput.value = "";

	});