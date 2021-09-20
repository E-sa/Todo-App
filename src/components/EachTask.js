import React from "react";


function EachTask({ tasks, remove, taskNum, taskChangedCondition, condition }) {

    return (

        <li className="each-task">

            <input
                onChange={() => taskChangedCondition({ taskNum })}
                type="checkbox"
                id="checkbox-1-1"
                className="regular-checkbox"
                checked={condition ? "checked" : ""}

            />

            <p>{tasks}</p>
            <div className="li-cross-mark" onClick={() => remove({ taskNum })} ></div>

        </li>


    )

}

export default EachTask;