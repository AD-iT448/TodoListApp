const waktu = new Date()
document.getElementById("waktu").innerHTML = waktu

document.getElementById('addTask').addEventListener('click', function() {
    const taskText = document.getElementById('task').value;
    const taskDate = document.getElementById('date').value;
    const taskPriority = document.getElementById('priority').value;
  
    if (taskText === '' || taskDate === '') {
      alert('Please enter a task and date');
      return;
    }
  
    const taskTable = document.getElementById('taskTable');
    const row = document.createElement('tr');
    const taskDoneTable = document.getElementById('taskDoneTable');
  
    // Column 1: Task Text
    const taskTextCell = document.createElement('td');
    taskTextCell.classList.add('py-2', 'border', 'px-4', 'text-center');
    taskTextCell.textContent = taskText;
    row.appendChild(taskTextCell);
  
    // Column 2: Task Date
    const taskDateCell = document.createElement('td');
    taskDateCell.classList.add('py-2', 'border', 'px-4', 'text-center');
    taskDateCell.textContent = taskDate;
    row.appendChild(taskDateCell);
  
    // Column 3: Task Priority
    const taskPriorityCell = document.createElement('td');
    taskPriorityCell.classList.add('py-2', 'border', 'px-4', 'text-center');
    taskPriorityCell.textContent = taskPriority;
    row.appendChild(taskPriorityCell);
  
    // Column 4: Complete Checkbox
    const completeCell = document.createElement('td');
    completeCell.classList.add('py-2', 'border', 'px-4', 'text-center');
    const completeCheckbox = document.createElement('input');
    completeCheckbox.type = 'checkbox';
    completeCheckbox.classList.add('form-checkbox');
    completeCell.appendChild(completeCheckbox);
    row.appendChild(completeCell);
  
    // Column 5: Delete Button
    const deleteCell = document.createElement('td');
    deleteCell.classList.add('py-2', 'border', 'px-4', 'text-center');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('bg-yellow-500','hover:bg-red-500','hover:text-white','bungee-regular', 'text-red-500', 'p-1', 'rounded', 'disabled:opacity-50');
    deleteButton.disabled = true; // Disable delete button initially
    completeCheckbox.addEventListener('change', function() {
      deleteButton.disabled = !completeCheckbox.checked; // Enable delete button if checkbox is checked
    });
    deleteButton.addEventListener('click', function() {
      taskTable.removeChild(row); // Remove row on delete button click
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);
  
    taskTable.appendChild(row);

    deleteButton.addEventListener('click', function() {
      if (completeCheckbox.checked) {
        // Move to completed table
        const completedTable = document.getElementById('completedTable');
        const completedRow = document.createElement('tr');
  
        const completedTaskTextCell = document.createElement('td');
        completedTaskTextCell.classList.add('py-2', 'border', 'px-4');
        completedTaskTextCell.textContent = taskText;
        completedRow.appendChild(completedTaskTextCell);
  
        const completedTaskDateCell = document.createElement('td');
        completedTaskDateCell.classList.add('py-2', 'border', 'px-4');
        completedTaskDateCell.textContent = taskDate;
        completedRow.appendChild(completedTaskDateCell);
  
        const completedTaskPriorityCell = document.createElement('td');
        completedTaskPriorityCell.classList.add('py-2', 'border', 'px-4');
        completedTaskPriorityCell.textContent = taskPriority;
        completedRow.appendChild(completedTaskPriorityCell);
  
        completedTable.appendChild(completedRow);
        taskTable.removeChild(row); // Remove row from task table
      }
    });

    
  
    // Clear input fields
    document.getElementById('task').value = '';
    document.getElementById('date').value = '';
    document.getElementById('priority').value = 'low';

    //Menampilkan task yang selesai
  // if(taskTable.removeChild(row) === true){
  //   document.write()
  // }
    
  });
  
  