const allTasks = document.querySelector('#book-list ul');
	const btnDel = document.querySelectorAll(".delete");
	const addForm = document.forms['add-list'];
	let newTaskDuplicated = false;

	addForm.addEventListener('submit',function(e) {
		e.preventDefault();

		const formInput = addForm.querySelector('input[type="text"]');
		const newTask = formInput.value.trim();
		let taskName = allTasks.querySelectorAll('li > span.name');

		taskName.forEach(i => {
			const allTasksValue = i.textContent.toLowerCase();
			const newTaskInput = newTask.toLowerCase();

			if (allTasksValue == newTaskInput) {
				newTaskDuplicated = true;
				alert("Duplicated Value Found.");
			}
		});

		if (!(newTaskDuplicated)) {
			const taskRow = document.createElement('li');
			const newTaskName = document.createElement('span');
			const deleteTask = document.createElement('span');

			newTaskName.textContent=newTask;
			deleteTask.textContent='delete';

			newTaskName.classList.add('name');
			deleteTask.classList.add('delete');

			taskRow.appendChild(newTaskName);
			taskRow.appendChild(deleteTask);

			allTasks.appendChild(taskRow);
		}

		formInput.value = "";

		newTaskDuplicated = false;

	});

	for(let btn of btnDel) {
		btn.addEventListener('click', (e) => {
			let rec = e.target.parentNode;
			let allRec = rec.parentNode;

			allRec.removeChild(rec);
		})
	};