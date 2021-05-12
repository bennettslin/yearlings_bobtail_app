import React from 'react'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import Button from '../../../Button'
import { setSelectedPromoPath } from '../../../../redux/marketing/action'
import { PROMO_PAGE_BUTTON_KEY } from '../../../../constants/buttons'

const PromoPageButton = () => {
    const dispatch = useDispatch()

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
                buttonTitle: 'back to promo homepage',
            }}
        />
    )
}

export default PromoPageButton
