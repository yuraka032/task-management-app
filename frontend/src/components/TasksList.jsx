import TaskItem from './TaskItem';

function TasksList({ tasks, onToggleComplete }) {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                />
            ))}
        </div>
    );
}

export default TasksList;