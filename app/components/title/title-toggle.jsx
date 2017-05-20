import React from 'react'
import Button from '../button/button'
import { TITLE_TOGGLE_KEY } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

const TitleToggle = (props) => {

    return (
        <TitleToggleView {...props}/>
    )
}

/****************
 * PRESENTATION *
 ****************/

const TitleToggleView = ({

    // From props.
    title,
    handleTitleSelect

}) => (
    <div className="section title-toggle">
        <div className="title-toggle-button-container">
            <Button
                isCustomShape={true}
                isCustomSize={true}
                accessKey={TITLE_TOGGLE_KEY}
                handleClick={handleTitleSelect}
                iconText={title}
            />
        </div>
    </div>
)

export default TitleToggle
