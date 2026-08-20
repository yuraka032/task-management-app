const API_URL = import.meta.env.VITE_API_URL;

export async function getTasks(completed = null) {
    let url = `${API_URL}/api/tasks/`;

    if (completed !== null) {
        url += `?completed=${completed}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }

    return response.json();
}

export async function createTask(taskData) {
    const response = await fetch(`${API_URL}/api/tasks/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
    });

    if (!response.ok) {
        throw new Error("Failed to create task");
    }

    return response.json();
}

export async function searchTasks(searchQuery, completed = null) {
    let url = `${API_URL}/api/tasks/search?search_query=${encodeURIComponent(searchQuery)}`;

    if (completed !== null) {
        url += `&completed=${completed}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to search tasks");
    }

    return response.json();
}

export async function updateTask(taskId, taskData) {
    const response = await fetch(`${API_URL}/api/tasks/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
    });

    if (!response.ok) {
        throw new Error("Failed to update task");
    }

    return response.json();
}

export async function deleteTask(taskId) {
    const response = await fetch(`${API_URL}/api/tasks/${taskId}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Failed to delete task");
    }

    return response.json();
}