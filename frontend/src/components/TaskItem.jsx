import { useState } from 'react';

import styles from '../styles/TaskItem.module.css';

import EditTaskModal from './EditTaskModal';
import DeleteModal from './DeleteModal';

function TaskItem({ task, onToggleComplete, onEdit, onDelete }) {
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

    const handleEditSave = async (updatedTask) => {
        try {
            await onEdit(task.id, updatedTask);
            setIsEditModalOpen(false);
        } catch (error) {
            console.error("Failed to edit task:", error);
        }
    };

    const handleDeleteConfirm = async () => {
        try {
            await onDelete(task.id);
            setIsDeleteModalOpen(false);
        } catch (error) {
            console.error("Failed to delete task:", error);
        }
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

                        <p
                            className={`${styles.taskName} ${
                                task.completed ? styles.completed : ''
                            }`}
                            onClick={handleTaskClick}
                        >
                            {task.title}
                        </p>
                    </div>

                    <div className={styles.actionButtons}>
                        <button onClick={handleEdit}>
                            <img src="/edit_icon.png" alt="Edit" className={styles.editImg}/>
                        </button>

                        <button onClick={handleDelete}>
                            <img src="/delete_icon.png" alt="Delete"  className={styles.deleteImg}/>
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