import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import PromoView from '../../Promo/View'
import { getBodyForPromoSinglePage } from '../../../endpoint/promo/singlePage'

const SinglePagePromo = ({ promoKey, handlePromoPageChange }) => {
    useEffect(() => {
        // Scroll back to top upon slide change.
        handlePromoPageChange()
    }, [])

    return (
        <PromoView {...{ body: getBodyForPromoSinglePage(promoKey) }} />
    )
}

SinglePagePromo.propTypes = {
    promoKey: PropTypes.string.isRequired,
    handlePromoPageChange: PropTypes.func.isRequired,
}

export default SinglePagePromo
