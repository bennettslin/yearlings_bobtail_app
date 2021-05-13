import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getIsArtupPage, getIsPromoHomepage } from '../../../helpers/promo'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import ArtupPagination from '../../Promos/Artup/Pagination'
import HomepageButton from './HomepageButton'
import './style'

const PromoFooter = ({ serverClientPromoKey }) => {
    // Promo homepage doesn't need footer.
    if (getIsPromoHomepage(serverClientPromoKey)) {
        return null
    }

    return (
        <div
            {...{
                className: cx(
                    'PromoFooter',
                    'promo__child',
                    'fCC',
                ),
            }}
        >
            <HomepageButton />
            {getIsArtupPage(serverClientPromoKey) && (
                <ArtupPagination />
            )}
        </div>
    )
}

PromoFooter.propTypes = {
    serverClientPromoKey: PropTypes.string.isRequired,
}

export default getPromoServerClientHoc(PromoFooter)
