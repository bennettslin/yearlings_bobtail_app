import React from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../Button'
import { mapIsPhoneWidth } from '../../../../redux/device/selector'
import { setSelectedPromoPath } from '../../../../redux/promo/action'
import { PROMO_PAGE_BUTTON_KEY } from '../../../../constants/buttons'

const HomepageButton = () => {
    const
        dispatch = useDispatch(),
        isPhoneWidth = useSelector(mapIsPhoneWidth)

    const handleButtonClick = () => {
        dispatch(setSelectedPromoPath())
    }

    return (
        <Button
            isLargeSize
            {...{
                className: cx(
                    'dramaMasks',
                ),
                buttonName: PROMO_PAGE_BUTTON_KEY,
                handleButtonClick,

                ...!isPhoneWidth && {
                    buttonTitle: 'back to promo homepage',
                },
            }}
        />
    )
}

export default HomepageButton
