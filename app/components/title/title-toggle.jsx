import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'
import { TITLE_TOGGLE_KEY } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

const TitleToggle = (props) => (
    <TitleToggleView {...props}/>
)

TitleToggle.propTypes = {
    selectedTitleIndex: PropTypes.number.isRequired,
    handleTitleToggle: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const TitleToggleView = ({

    // From props.
    selectedTitleIndex,
    handleTitleToggle

}) => (
    <div className="section title-toggle">
        <div className="title-toggle-button-container">
            <Button
                isCustomShape={true}
                isCustomSize={true}
                accessKey={TITLE_TOGGLE_KEY}
                handleClick={handleTitleToggle}
                iconText={selectedTitleIndex}
            />
        </div>
    </div>
)

export default TitleToggle
