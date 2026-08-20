import { useState } from 'react';

import styles from '../styles/TaskManagement.module.css';

import SearchBar from '../components/SearchBar';
import FilterButton from '../components/FilterButton';
import TasksList from '../components/TasksList';
import AddTaskModal from '../components/AddTaskModal';
import DeleteModal from '../components/DeleteModal';

import initialTasks from '../data/tasks';

function TaskManagement() {
    const [tasks, setTasks] = useState(initialTasks);

    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("all");

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const fetchTasks = async (query, selectedFilter) => {
        let completed = null;

        if (selectedFilter === "completed") {
            completed = true;
        } else if (selectedFilter === "incomplete") {
            completed = false;
        }

        console.log("Search:", query);
        console.log("Completed:", completed);

        // API request will go here
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        fetchTasks(query, filter);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        fetchTasks(searchQuery, newFilter);
    };

    const handleToggleComplete = (taskId) => {
        console.log("Toggle complete:", taskId);

        // API update will go here
    };

    const handleOpenAddModal = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
    };

    const handleAddTask = (taskData) => {
        // API request will be implemented later
        console.log("Add task:", taskData);
        setIsAddModalOpen(false);
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

            <TasksList tasks={tasks} onToggleComplete={handleToggleComplete} />

            <button className={styles.addTaskButton} onClick={handleOpenAddModal}>
                <img src="../../public/add_icon.png" alt="Add Task" className={styles.addIcon} />
            </button>

            {isAddModalOpen && (
                <AddTaskModal onClose={() => setIsAddModalOpen(false)} onSave={handleAddTask} />
            )}
        </div>
    );
}

export default TaskManagement;