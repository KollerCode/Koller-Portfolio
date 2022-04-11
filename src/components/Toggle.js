import React from "react";

function Toggle() {

    return (
    <label for="theme" className="theme">
	<span>Light</span>
	<span className="theme-toggle-wrap">
        <input id="theme"
                className="theme-toggle"
                    type="checkbox"
                    role="switch"
                    name="theme"
                    value="dark"/>
		<span class="theme-fill"></span>
		<span class="theme-icon">
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
		</span>
	</span>
	<span>Dark</span>
</label>
    )
    
}

export default Toggle;