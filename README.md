# Daily Task Manager

Welcome to the Daily Task Manager! This Chrome extension helps you manage your daily tasks efficiently. You can add, mark as completed, and delete tasks. Tasks are stored using Chrome's storage API, ensuring they persist across browser sessions and devices.

## Features

- **Add Tasks**: Enter new tasks into the input field and click "Add Task" or press "Enter" to add them to your list.
- **Toggle Task Completion**: Click on a task to toggle its completion status. Completed tasks will have a strikethrough.
- **Delete Tasks**: Remove tasks with the "Delete" button next to each task.
- **Persistent Storage**: Tasks are saved using Chrome's `chrome.storage.sync`, ensuring they are available across all your devices.
- **Keyboard Support**: Add tasks quickly by pressing "Enter".
- **User-Friendly Interface**: Simple and intuitive design for easy task management.
- **Cross-Device Sync**: Syncs tasks across devices where you're logged into Chrome.

## Installation

To install the Daily Task Manager extension, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/shaily-20/daily-task-manager.git
    ```
2. **Load the Extension in Chrome**:
    - Open Chrome and go to `chrome://extensions/`.
    - Enable "Developer mode" using the toggle switch in the top right corner.
    - Click "Load unpacked" and select the `daily-task-manager` directory.

## Usage

1. **Open the Extension**: Click on the extension icon in the Chrome toolbar to open the popup.
2. **Add a Task**: Type your task into the input field and click "Add Task" or press "Enter".
3. **Toggle a Task**: Click on a task to mark it as completed or incomplete. Completed tasks will show a strikethrough.
4. **Delete a Task**: Click the "Delete" button next to a task to remove it from the list.

## Technical Details

- **Manifest Version**: 3
- **Storage**: Uses `chrome.storage.sync` to store tasks, which syncs data across devices.
- **HTML**: `popup.html` for the extension's UI.
- **JavaScript**: `popup.js` manages the functionality of adding, toggling, and deleting tasks.
- **CSS**: `popup.css` styles the popup window.

## Task Limitations

- **Storage Limits**: Chrome's `chrome.storage.sync` API has a storage limit of 100KB per extension. For more tasks, consider using `chrome.storage.local`, which has a higher limit (about 5MB).


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to [Chrome Developers](https://developer.chrome.com/docs/extensions/mv3/) for their documentation and API support.
