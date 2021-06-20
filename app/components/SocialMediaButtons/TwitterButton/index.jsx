import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import { SOCIAL_TWITTER_BUTTON_KEY } from '../../../constants/buttons'

const TwitterButton = ({ annotationIndex }) => {
    const handleButtonClick = () => {
        console.log(annotationIndex)
    }

    return (
        <Button
            isSmallSize
            {...{
                className: cx(
                    'TwitterButton',
                ),
                buttonName: SOCIAL_TWITTER_BUTTON_KEY,
                handleButtonClick,
            }}
        />
    )
}

TwitterButton.propTypes = {
    annotationIndex: PropTypes.number,
}

export default TwitterButton
