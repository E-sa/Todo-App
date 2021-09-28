import react from "react";

function LastLiSmallScreen({ filter, changeFilter }) {

    return (
        <span id="filters-span-s">
            <li className="each-task" id="last-li-s">

                <span
                    className={[filter === "all" ? 'activeFilter all' : "all"]}
                    id="all-s"
                    onClick={() => changeFilter("all")}
                >
                    All
                </span>

                <span
                    id="active-s"
                    className={[filter === "active" ? 'activeFilter' : ""]}
                    onClick={() => changeFilter("active")}
                >
                    Active
                </span>

                <span
                    id="completed-s"
                    className={[filter === "completed" ? 'activeFilter' : ""]}
                    onClick={() => changeFilter("completed")}
                >
                    Completed
                </span>
            </li>
        </span>
    )

}

export default LastLiSmallScreen;
