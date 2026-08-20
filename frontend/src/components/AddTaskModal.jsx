import { useState } from 'react';

import styles from '../styles/AddTaskModal.module.css';

function AddTaskModal({ onClose, onSave }) {
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");

    const handleSave = () => {
        if (!taskName.trim()) {
            alert("Task name is required.");
            return;
        }

        const taskData = {
            title: taskName.trim(),
            description: description.trim()
        };

        onSave(taskData);
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Add a Task</h2>

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

export default AddTaskModal;