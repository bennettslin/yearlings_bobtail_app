import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import Button from '../../../Button'
import { resetPromo } from '../../../../redux/promo/action'
import { PROMO_TOGGLE_KEY } from '../../../../constants/access'
import { PROMO_PAGE_BUTTON_KEY } from '../../../../constants/buttons'
import './style'

const HomepageButton = ({ isSelected }) => {
    const dispatch = useDispatch()

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

                // TODO: Removing text for now.
                // ...!isPhoneWidth && {
                //     buttonTitle: 'back to promo homepage',
                // },
                isSelectedDisabled: isSelected,
            }}
        />
    )
}

HomepageButton.propTypes = {
    isSelected: PropTypes.bool.isRequired,
}

export default HomepageButton
