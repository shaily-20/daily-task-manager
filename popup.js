document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    // Helper function to get tasks from storage
    const getTasks = () => new Promise((resolve) => {
        chrome.storage.sync.get(['tasks'], (result) => resolve(result.tasks || []));
    });

    // Helper function to set tasks to storage
    const setTasks = (tasks) => new Promise((resolve) => {
        chrome.storage.sync.set({ tasks }, () => resolve());
    });

    // Renders tasks in the UI
    const renderTasks = async () => {
        const tasks = await getTasks();
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task.text;
            if (task.completed) li.classList.add('completed');

            li.addEventListener('click', () => toggleTask(index));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', (event) => {
                event.stopPropagation();
                deleteTask(index);
            });

            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    };

    // Adds a new task
    const addTask = async () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const tasks = await getTasks();
            tasks.push({ text: taskText, completed: false });
            await setTasks(tasks);
            taskInput.value = '';
            renderTasks();
        }
    };

    // Toggles the completion status of a task
    const toggleTask = async (index) => {
        const tasks = await getTasks();
        tasks[index].completed = !tasks[index].completed;
        await setTasks(tasks);
        renderTasks();
    };

    // Deletes a task
    const deleteTask = async (index) => {
        const tasks = await getTasks();
        tasks.splice(index, 1);
        await setTasks(tasks);
        renderTasks();
    };

    // Add task when the button is clicked
    addTaskButton.addEventListener('click', addTask);

    // Add task when the Enter key is pressed
    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission or other default actions
            addTask();
        }
    });

    renderTasks();
});
