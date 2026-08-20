import { useState } from 'react';

import styles from '../styles/AddTaskModal.module.css';

function EditTaskModal({ task, onClose, onSave }) {
    const [taskName, setTaskName] = useState(task.name);
    const [description, setDescription] = useState(task.description);

    const handleSave = () => {
        if (!taskName.trim()) {
            alert("Task name is required.");
            return;
        }

        const updatedTask = {
            id: task.id,
            name: taskName.trim(),
            description: description.trim()
        };

        onSave(updatedTask);
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Edit a Task</h2>

                <p>Task Name</p>
                <input
                    type="text"
                    placeholder="my task name"
                    value={taskName}
                    onChange={(event) => setTaskName(event.target.value)}
                />

                <p>Description</p>
                <textarea
                    placeholder="my task description..."
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                <div className={styles.actionButton}>
                    <button className={styles.cancelBtn} onClick={onClose}>
                        Cancel
                    </button>

                    <button className={styles.saveBtn} onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditTaskModal;