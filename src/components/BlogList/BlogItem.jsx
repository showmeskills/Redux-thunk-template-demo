import React from 'react';
import PropTypes from 'prop-types';



const BlogItem =(props)=>{
    return(
        <li>
            <span>{props.title}</span>
        </li>
    )
}
BlogItem.propTypes={
    title: PropTypes.string.isRequired,
}

export default BlogItem