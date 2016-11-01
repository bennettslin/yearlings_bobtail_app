import React from 'react'

/*************
 * CONTAINER *
 *************/

const TitleSection = ({

    onTitleClick,

...other }) => {

    const onClick = e => onTitleClick(e, 0)

    return (
        <TitleSectionView {...other}
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
    accessHighlighted,
    onClick

}) => (
    <div className="section title-section">
        <h1 className={accessHighlighted ? 'access-highlighted' : ''}>
            <a className="enabled" onClick={onClick}>
                {title}
            </a>
        </h1>
    </div>
)

export default TitleSection
