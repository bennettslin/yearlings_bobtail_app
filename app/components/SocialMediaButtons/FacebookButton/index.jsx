import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import { SOCIAL_FACEBOOK_BUTTON_KEY } from '../../../constants/buttons'

const FacebookButton = ({ annotationIndex }) => {
    const handleButtonClick = () => {
        console.log(annotationIndex)
    }

    return (
        <Button
            isSmallSize
            {...{
                className: cx(
                    'FacebookButton',
                ),
                buttonName: SOCIAL_FACEBOOK_BUTTON_KEY,
                handleButtonClick,
            }}
        />
    )
}

FacebookButton.propTypes = {
    annotationIndex: PropTypes.number,
}

export default FacebookButton
