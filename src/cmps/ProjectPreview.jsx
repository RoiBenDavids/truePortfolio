import React from 'react';
import { Link } from 'react-router-dom';

export function ProjectPreview({ proj }) {
    return (
        <React.Fragment>

            <div className="title flex justify-between">
                <h2>{proj.name}</h2>
            </div>
            <Link to={`/projects/${proj.id}`}>
                <div className="image">
                    <img src={proj.imgSrc}></img>
                </div>
            </Link>
        </React.Fragment>


    )
}