import React from 'react';

export default function Category(props) {
    // console.log(props);
    return (
        <div>
            <button onClick={props.handleCategoryClick}>Category</button>
        </div>
    )
}
