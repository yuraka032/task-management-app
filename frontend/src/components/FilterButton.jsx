import styles from '../styles/Filter.module.css';

function FilterButton({ filter, onFilterChange }) {
    return (
        <div className={styles.filterSection}>
            <p>Filter by:</p>

            <label>
                <input
                    type="radio"
                    name="status"
                    value="all"
                    className={styles.radio}
                    checked={filter === "all"}
                    onChange={(event) => onFilterChange(event.target.value)}
                />
                All
            </label>

            <label>
                <input
                    type="radio"
                    name="status"
                    value="completed"
                    className={styles.radio}
                    checked={filter === "completed"}
                    onChange={(event) => onFilterChange(event.target.value)}
                />
                Completed
            </label>

            <label>
                <input
                    type="radio"
                    name="status"
                    value="incomplete"
                    className={styles.radio}
                    checked={filter === "incomplete"}
                    onChange={(event) => onFilterChange(event.target.value)}
                />
                Incomplete
            </label>
        </div>
    );
}

export default FilterButton;