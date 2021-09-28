import react from "react";


function LastLiBigScreen({ itemsleft, filter, changeFilter, clear }) {
    return (
        <li className="each-task" id="last-li-b">
            <span id="items-left">{itemsleft} items left</span>
            <span id="filters-span-l">
                <span
                    className={[filter === "all" ? 'activeFilter' : ""]}
                    id="all"
                    onClick={() => changeFilter("all")}
                >
                    All
                </span>

                <span
                    id="active"
                    className={[filter === "active" ? 'activeFilter' : ""]}
                    onClick={() => changeFilter("active")}
                >
                    Active
                </span>

                <span
                    id="completed"
                    className={[filter === "completed" ? 'activeFilter' : ""]}
                    onClick={() => changeFilter("completed")}
                >
                    Completed
                </span>
                
            </span>
            <span id="clear" onClick={clear}> Clear Completed</span>
        </li>
    )

}

export default LastLiBigScreen;
