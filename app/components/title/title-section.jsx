import React from 'react'

/*************
 * CONTAINER *
 *************/

const TitleSection = (props) => {

    const { onTitleClick } = props,

        onClick = () => onTitleClick(0)

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
            <a onClick={onClick}>
                {title}
            </a>
        </h1>
    </div>
)

export default TitleSection
