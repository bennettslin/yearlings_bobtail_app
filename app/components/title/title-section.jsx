import React from 'react'
import Button from '../button/button'
import { TITLE_SELECT_KEY } from '../../helpers/constants'

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
        <div className="title-button-container">
            <Button
                isCustomShape={true}
                isCustomSize={true}
                accessKey={TITLE_SELECT_KEY}
                handleClick={handleTitleSelect}
                iconText={title}
            />
        </div>
    </div>
)

export default TitleSection
