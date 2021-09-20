import react from "react";

function LastLiSmallScreen({ filter, changeFilter }) {

    return (
        <div id="filters-span-s">
            <li className="each-task" id="last-li">

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
            </li>
        </div>
    )

}

export default LastLiSmallScreen;