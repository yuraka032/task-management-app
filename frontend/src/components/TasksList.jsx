import TaskItem from './TaskItem';

function TasksList({ tasks, onToggleComplete, onEdit, onDelete }) {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TasksList;