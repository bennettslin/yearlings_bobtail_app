import React from 'react'
import Button from '../button/button'

/*************
 * CONTAINER *
 *************/

const TitleSection = (props) => {

    return (
        <TitleSectionView {...props}/>
    )
}

/****************
 * PRESENTATION *
 ****************/

const TitleSectionView = ({

    // From props.
    title,
    handleTitleSelect

}) => (
    <div className="section title-section">
        <Button
            isCustom={true}
            handleClick={handleTitleSelect}
            iconText={title}
        />
    </div>
)

export default TitleSection
