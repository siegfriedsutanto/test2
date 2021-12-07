import React from 'react';

// const handleInputChange = (event) => {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     console.log(value);
// }

const SelectSwitch = (props) => {
    var checkedDefault = props.value;
    const [checked, setChecked] = React.useState(false);

    const handleInputChange = (event) => {
        let id = event.target.getAttribute("data-id");
        let type = event.target.getAttribute("data-type");
        setChecked(!checked, toggleSwitchList(!checked,id,type));
    };

    const toggleSwitchList = (checked, id, type) => {
        if (type == "Series" || type == "Season") {
            // SyntaxError: Failed to execute 'querySelectorAll' on 'Document': '[data-parent-id=806683]' is not a valid selector.
            Array.from(document.querySelectorAll("[data-parent-id='" + id + "']")).forEach((el) => 
                // console.log(el)
                el.click()
            );
        }
    }
    return (
        <label className={`toggle ${checked}`}>
            <input className="toggle-checkbox" type="checkbox"  checked={checked} onChange={handleInputChange} data-type={props.type} data-id={props.id} data-parent-id={props.parentID}/>
            <div className="toggle-switch"></div>
        </label>
    );
  };
  
export default SelectSwitch;