import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import PromoView from '../../Promo/View'
import { getBodyForHomepage } from '../../../endpoint/promo/homepage'

const HomepagePromo = ({ handlePromoPageChange }) => {
    useEffect(() => {
        // Scroll back to top upon slide change.
        handlePromoPageChange()
    }, [])

    return (
        <PromoView {...{ body: getBodyForHomepage() }} />
    )
}

HomepagePromo.propTypes = {
    handlePromoPageChange: PropTypes.func.isRequired,
}

export default HomepagePromo
