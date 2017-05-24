import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'
import { DOTS_SECTION_ACCESS_KEY } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

const DotsToggle = (props) => (
    <DotsToggleView {...props} />
)

DotsToggle.propTypes = {
    selectedDotsIndex: PropTypes.number.isRequired,
    handleDotsSectionToggle: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const DotsToggleView = ({

    // From props.
    selectedDotsIndex,
    handleDotsSectionToggle

}) => (
    <div className="dots-toggle-button-container">
        <div className="dots-toggle-button-block">
            <Button
                buttonName="dots-toggle"
                iconText={selectedDotsIndex}
                accessKey={DOTS_SECTION_ACCESS_KEY}
                isLarge={true}
                handleClick={handleDotsSectionToggle}
            />
        </div>
    </div>
)

export default DotsToggle
