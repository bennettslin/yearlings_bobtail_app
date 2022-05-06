import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { navigate } from 'gatsby'
import Button from '../../../Button'
import { PROMO_BACK_BUTTON_KEY } from '../../../../constants/buttons'

const BackButton = ({
    isDownloadPage,
}) => {
    const handleButtonClick = () => {
        navigate(-1)
    }

    return isDownloadPage && (
        <Button
            isLargeSize
            {...{
                className: cx(
                    'dramaMasks',
                ),
                buttonName: PROMO_BACK_BUTTON_KEY,
                handleButtonClick,
            }}
        />
    )
}

BackButton.propTypes = {
    isDownloadPage: PropTypes.bool.isRequired,
}

export default BackButton
