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
        setChecked(!checked);
    };
    return (
        <label className={`toggle ${checked}`}>
            <input className="toggle-checkbox" type="checkbox"  checked={checked} onChange={handleInputChange} />
            <div className="toggle-switch"></div>
        </label>
    );
  };
  
export default SelectSwitch;