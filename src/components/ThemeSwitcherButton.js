import React from "react";

function ThemeSwitcherButton({ onChangeTheme }) {

  return (

    <div id="sun-moon-container">

      <label for="toggle">kk
        <input
          className="sun-moon-checkbox"
          type="checkbox"
          onClick={() => onChangeTheme("clicked")}
          id="toggle"
        />
      </label>

      <div className="sun-moon-div"></div>
    </div>

  )
}


export default ThemeSwitcherButton;
