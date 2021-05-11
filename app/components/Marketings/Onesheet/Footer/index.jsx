import React from 'react'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import Button from '../../../Button'
import { setSelectedPromoPath } from '../../../../redux/marketing/action'
import { PROMO_PAGE_BUTTON_KEY } from '../../../../constants/buttons'

const OnesheetFooter = () => {
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
                    'RootButton',
                ),
                buttonName: PROMO_PAGE_BUTTON_KEY,
                handleButtonClick,
                buttonTitle: 'back to promo page',
            }}
        />
    )
}

export default OnesheetFooter
