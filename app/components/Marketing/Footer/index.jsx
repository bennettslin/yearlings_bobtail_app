// Section for marketing navigation.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getIsArtupPage, getIsPromoHomepage } from '../../../helpers/marketing'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import ArtupPagination from '../../Promos/Artup/Pagination'
import HomepageButton from './HomepageButton'
import './style'

const PromoFooter = ({ serverClientPromoPath }) => {
    // Promo homepage doesn't need footer.
    if (getIsPromoHomepage(serverClientPromoPath)) {
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
            {getIsArtupPage(serverClientPromoPath) && (
                <ArtupPagination />
            )}
        </div>
    )
}

PromoFooter.propTypes = {
    serverClientPromoPath: PropTypes.string.isRequired,
}

export default getPromoServerClientHoc(PromoFooter)
