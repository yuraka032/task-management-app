import { useEffect, useState } from 'react';

import styles from '../styles/TaskManagement.module.css';

import SearchBar from '../components/SearchBar';
import FilterButton from '../components/FilterButton';
import TasksList from '../components/TasksList';
import AddTaskModal from '../components/AddTaskModal';

import {
    getTasks,
    searchTasks,
    createTask,
    updateTask,
    deleteTask
} from "../services/taskService";

function TaskManagement() {
   const [tasks, setTasks] = useState([]);

    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("all");

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    // Convert the filter value into the completed parameter
    const getCompletedValue = (selectedFilter) => {
        if (selectedFilter === "completed") {
            return true;
        }

        if (selectedFilter === "incomplete") {
            return false;
        }

        return null;
    };

    // Fetch tasks based on search/filter
    const fetchTasks = async (query = searchQuery, selectedFilter = filter) => {
        try {
            const completed = getCompletedValue(selectedFilter);

            let data;

            if (query.trim() !== "") {
                data = await searchTasks(query, completed);
            } else {
                data = await getTasks(completed);
            }

            setTasks(data);
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
        }
    };

    // Initial task fetch
    useEffect(() => {
        fetchTasks("", "all");
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
        fetchTasks(query, filter);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        fetchTasks(searchQuery, newFilter);
    };

    // Toggle task completion
    const handleToggleComplete = async (taskId) => {
        try {
            const task = tasks.find((task) => task.id === taskId);

            if (!task) {
                return;
            }

            await updateTask(taskId, {
                ...task,
                completed: !task.completed
            });

            // Refresh the list so filters/search stay correct
            fetchTasks(searchQuery, filter);

        } catch (error) {
            console.error("Failed to update task:", error);
        }
    };

    const handleOpenAddModal = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
    };

    // Create a new task
    const handleAddTask = async (taskData) => {
        try {
            await createTask(taskData);

            setIsAddModalOpen(false);

            // Refresh task list
            fetchTasks(searchQuery, filter);

        } catch (error) {
            console.error("Failed to create task:", error);
        }
    };

    const handleEditTask = async (taskId, updatedTask) => {
        try {
            await updateTask(taskId, updatedTask);

            await fetchTasks(searchQuery, filter);
        } catch (error) {
            console.error("Failed to update task:", error);
            throw error;
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            await deleteTask(taskId);

            await fetchTasks(searchQuery, filter);
        } catch (error) {
            console.error("Failed to delete task:", error);
            throw error;
        }
    };

    return (
        <div className={styles.taskManagement}>

            <div className={styles.header}>
                <h1>My Tasks</h1>
                <div className={styles.searchFilterContainer}>
                    <SearchBar onSearch={handleSearch} />
                    <FilterButton filter={filter} onFilterChange={handleFilterChange} />
                </div>
            </div>

            <TasksList tasks={tasks} onToggleComplete={handleToggleComplete} 
                        onEdit={handleEditTask} onDelete={handleDeleteTask}/>

            <button className={styles.addTaskButton} onClick={handleOpenAddModal}>
                <img src="/add_icon.png" alt="Add Task" className={styles.addIcon} />
            </button>

            {isAddModalOpen && (
                <AddTaskModal onClose={() => setIsAddModalOpen(false)} onSave={handleAddTask} />
            )}
        </div>
    );
}

export default TaskManagement;