import React from "react";

const Dropdown = ({ value, onChange, options }) => {
    return (
        <>
            <div
                style={{ display: "inline-block", position: "relative", margin: "5px" }}
            >
                <select
                    value={value}
                    onChange={onChange}
                    style={{
                        width: "100%",
                        padding: "8px 12px",
                        fontSize: "16px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        backgroundColor: "#fff",
                        cursor: "pointer",
                        outline: "none",
                    }}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Dropdown;
