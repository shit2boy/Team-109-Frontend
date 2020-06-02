import React from "react";

export default function Formfield({ type, label, name, placeholder, value }) {
    return (
            <div className=" " >
                <label for={label}>
                    {label}
                </label>
                    <input
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                    />
               
            </div>
    );
}
