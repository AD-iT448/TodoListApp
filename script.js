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
   
  
    // Ini kolom 1: Task Text
    const taskTextCell = document.createElement('td');
    taskTextCell.classList.add('py-2', 'border', 'px-4', 'text-center');
    taskTextCell.textContent = taskText;
    row.appendChild(taskTextCell);
  
    // Ini kolom 2: Task Date
    const taskDateCell = document.createElement('td');
    taskDateCell.classList.add('py-2', 'border', 'px-4', 'text-center');
    taskDateCell.textContent = taskDate;
    row.appendChild(taskDateCell);
  
    // Ini kolom 3: Task Priority
    const taskPriorityCell = document.createElement('td');
    taskPriorityCell.classList.add('py-2', 'border', 'px-4', 'text-center');
    taskPriorityCell.textContent = taskPriority;
    row.appendChild(taskPriorityCell);
  
    // iNI kolom 4: Complete Checkbox
    const completeCell = document.createElement('td');
    completeCell.classList.add('py-2', 'border', 'px-4', 'text-center');
    const completeCheckbox = document.createElement('input');
    completeCheckbox.type = 'checkbox';
    completeCheckbox.classList.add('form-checkbox');
    completeCell.appendChild(completeCheckbox);
    row.appendChild(completeCell);
  
    // Ini Kolom 5: Delete Button
    const deleteCell = document.createElement('td');
    deleteCell.classList.add('py-2', 'border', 'px-4', 'text-center');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('bg-yellow-500','hover:bg-red-500','hover:text-white','bungee-regular', 'text-red-500', 'p-1', 'rounded', 'disabled:opacity-50');
    deleteButton.disabled = true; // tombol hapus di matikan terlebih dahulu
    completeCheckbox.addEventListener('change', function() {
      if(completeCheckbox.checked){
        row.classList.add('line-through','text-gray-500');
        deleteButton.disabled=false;
      }else{
        row.classList.remove('line-through','text-gray-500')
        deleteButton.disabled=true;
      }
      //  Nyalahkan tombol delete jika checkbox complete di check
      
    });
    deleteButton.addEventListener('click', function() {
      taskTable.removeChild(row); // Hapus baris saat tombol hapus di klik
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);
  
    taskTable.appendChild(row);

    deleteButton.addEventListener('click', function() {
      if (completeCheckbox.checked) {
        // Memindahkan data yang complete ke list tugas selesai
        const completedTable = document.getElementById('completedTable');
        const completedRow = document.createElement('tr');
  
        const completedTaskTextCell = document.createElement('td');
        completedTaskTextCell.classList.add('py-2', 'border', 'px-4');
        completedTaskTextCell.textContent = taskText;
        completedRow.appendChild(completedTaskTextCell);
  
        
  
        const completedTaskPriorityCell = document.createElement('td');
        completedTaskPriorityCell.classList.add('py-2', 'border', 'px-4');
        completedTaskPriorityCell.textContent = taskPriority;
        completedRow.appendChild(completedTaskPriorityCell);

        const completedTaskDateCell = document.createElement('td');
        completedTaskDateCell.classList.add('py-2', 'border', 'px-4');
        completedTaskDateCell.textContent = taskDate;
        completedRow.appendChild(completedTaskDateCell);

  
        completedTable.appendChild(completedRow);
        taskTable.removeChild(row); // Hapus baris dari tabel tugas
      }
    });

   
    // Hapus Input fields
    document.getElementById('task').value = '';
    document.getElementById('date').value = '';
    document.getElementById('priority').value = 'low';


    
  });
  
   // Hapus Semua tugas
   document.getElementById('clearCompleted').addEventListener('click', function() {
    const completedTable = document.getElementById('completedTable');
    while (completedTable.firstChild) {
      completedTable.removeChild(completedTable.firstChild);
    }
  });