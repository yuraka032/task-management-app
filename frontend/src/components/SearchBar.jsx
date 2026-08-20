import { useState } from 'react';

import styles from '../styles/Search.module.css';

function SearchBar({ onSearch }) {
    const [searchInput, setSearchInput] = useState("");

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onSearch(searchInput.trim());
        }
    };

    return (
        <div className={styles.searchContainer}>
            <img src="/search_icon.png" alt="Search" />

            <input
                type="text"
                placeholder="Task Name"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default SearchBar;