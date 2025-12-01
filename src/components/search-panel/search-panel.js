import { input } from "@testing-library/user-event/dist/cjs/event/input.js"
import './search-panel.css';


const SearchPanel = () => {
    return (
        <input 
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника" />
    )
}

export default SearchPanel;