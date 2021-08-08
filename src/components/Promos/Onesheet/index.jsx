import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import PromoView from '../../Promo/View'
import { getBodyForOnesheet } from '../../../endpoint/promo/onesheet'

const OnesheetPromo = ({ handlePromoPageChange }) => {
    useEffect(() => {
        // Scroll back to top upon slide change.
        handlePromoPageChange()
    }, [])

    return (
        <PromoView
            {...{
                body: getBodyForOnesheet(),
            }}
        />
    )
}

OnesheetPromo.propTypes = {
    handlePromoPageChange: PropTypes.func.isRequired,
}

export default OnesheetPromo
