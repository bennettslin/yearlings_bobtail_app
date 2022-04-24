import React from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../Button'
import { mapIsPhoneWidth } from '../../../../redux/device/selector'
import { resetPromo } from '../../../../redux/promo/action'
import { PROMO_TOGGLE_KEY } from '../../../../constants/access'
import { PROMO_PAGE_BUTTON_KEY } from '../../../../constants/buttons'

const HomepageButton = () => {
    const
        dispatch = useDispatch(),
        isPhoneWidth = useSelector(mapIsPhoneWidth)

    const handleButtonClick = () => {
        dispatch(resetPromo())
    }

    return (
        <Button
            isLargeSize
            {...{
                className: cx(
                    'dramaMasks',
                ),
                buttonName: PROMO_PAGE_BUTTON_KEY,
                accessKey: PROMO_TOGGLE_KEY,
                handleButtonClick,

                ...!isPhoneWidth && {
                    buttonTitle: 'back to promo homepage',
                },
            }}
        />
    )
}

export default HomepageButton
