import styles from '../styles/DeleteModal.module.css';

function DeleteModal({ task, onClose, onDelete }) {
    const handleDelete = () => {
        onDelete(task.id);
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Delete Confirmation</h2>

                <p>Are you sure you want to delete this task?</p>
                <p className={styles.taskName}>Task Name: {task.name}</p>

                <div className={styles.actionButton}>
                    <button className={styles.cancelBtn} onClick={onClose}>
                        Cancel
                    </button>

                    <button className={styles.deleteBtn} onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;