import { useState } from 'react';

import styles from '../styles/TaskItem.module.css';

import EditTaskModal from './EditTaskModal';
import DeleteModal from './DeleteModal';

function TaskItem({ task, onToggleComplete }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleTaskClick = () => {
        setIsExpanded(!isExpanded);
    };

    const handleComplete = () => {
        onToggleComplete(task.id);
    };

    const handleEdit = () => {
        setIsEditModalOpen(true);
    };

    const handleDelete = () => {
        setIsDeleteModalOpen(true);
    };

    const handleEditSave = (updatedTask) => {
        // Edit API/action will be implemented later
        console.log("Edit task:", updatedTask);

        setIsEditModalOpen(false);
    };

    const handleDeleteConfirm = (taskId) => {
        // Delete API/action will be implemented later
        console.log("Delete task:", taskId);

        setIsDeleteModalOpen(false);
    };

    return (
        <>
            <div className={styles.taskItem}>
                <div className={styles.mainTask}>
                    <div className={styles.task}>
                        <input
                            type="checkbox"
                            className={styles.checkbox}
                            checked={task.completed}
                            onChange={handleComplete}
                        />

                        <p className={styles.taskName} onClick={handleTaskClick}>
                            {task.name}
                        </p>
                    </div>

                    <div className={styles.actionButtons}>
                        <button onClick={handleEdit}>
                            <img src="../../public/edit_icon.png" alt="Edit" className={styles.editImg}/>
                        </button>

                        <button onClick={handleDelete}>
                            <img src="../../public/delete_icon.png" alt="Delete"  className={styles.deleteImg}/>
                        </button>
                    </div>
                </div>

                {isExpanded && (
                    <div className={styles.description}>
                        <p>{task.description}</p>
                    </div>
                )}

            </div>

            {isEditModalOpen && (
                <EditTaskModal 
                    task={task} 
                    onClose={() => setIsEditModalOpen(false)} 
                    onSave={handleEditSave} 
                />
            )}

            {isDeleteModalOpen && (
                <DeleteModal
                    task={task}
                    onClose={() => setIsDeleteModalOpen(false)}
                    onDelete={handleDeleteConfirm}
                />
            )}
        </>
    );
}

export default TaskItem;