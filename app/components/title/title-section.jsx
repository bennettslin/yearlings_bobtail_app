import React from 'react'

/*************
 * CONTAINER *
 *************/

const TitleSection = (props) => {

    const { onTitleClick } = props,

        onClick = (e) => onTitleClick(e, 0)

    return (
        <TitleSectionView {...props}
            onClick={onClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const TitleSectionView = ({

    // From props.
    title,
    onClick

}) => (

    <div className="section title-section">
        <h1>
            <a className="enabled" onClick={onClick}>
                {title}
            </a>
        </h1>
    </div>
)

export default TitleSection
