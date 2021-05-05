import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../components/Button'
import ButtonTitle from '../../../components/Button/Title'
import { MARKETING_HOME_KEY } from '../../../constants/access'
import { MARKETING_RETURN_BUTTON_KEY } from '../../../constants/buttons'
import './style'

const MarketingHeader = ({
    returnToAlbum,

}) => (
    <div
        {...{
            className: cx(
                'MarketingHeader',
            ),
        }}
    >
        <Button
            isCustomSize
            {...{
                className: cx(
                    'dramaMasks',
                ),
                buttonName: MARKETING_RETURN_BUTTON_KEY,
                accessKey: MARKETING_HOME_KEY,
                handleButtonClick: returnToAlbum,
                inanimateChild: (
                    <ButtonTitle
                        {...{
                            title: 'back to album',
                        }}
                    />
                ),
            }}
        />
    </div>
)

MarketingHeader.propTypes = {
    returnToAlbum: PropTypes.func.isRequired,
}

export default MarketingHeader
