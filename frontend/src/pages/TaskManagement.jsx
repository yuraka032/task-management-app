import Search from '../components/Search';
import Filter from '../components/Filter';

function TaskManagement() {
    return (
        <>
            <div className="header">
                <h1>My Tasks</h1>  
                <div>
                    <Search />
                    <Filter />
                </div>
            </div>
        </>
    )
}

export default TaskManagement;