import React from 'react';

export default function Category(props) {
console.log("### Category Item ");
// console.log(props);
    return (
        <div className="app-category">
            <button className="app-btn app-btn--category" onClick={props.handleCategoryClick}>{props.category}</button>
        </div>
    )
}
