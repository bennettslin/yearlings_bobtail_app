import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
    getIsArtupPage,
    getIsParetoPage,
    getIsPitchPage,
    getIsPromoHomepage,
} from '../../../helpers/promo'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import Contact from '../../Contact'
import ArtupPagination from '../../Promos/Artup/Pagination'
import ParetoPagination from '../../Promos/Pareto/Pagination'
import HomepageButton from './HomepageButton'
import './style'

const PromoFooter = ({ serverClientPromoKey }) => (
    <div
        {...{
            className: cx(
                'PromoFooter',
                'promo__child',
                'fCC',
            ),
        }}
    >
        {getIsArtupPage(serverClientPromoKey) && (
            <ArtupPagination />
        )}
        {getIsParetoPage(serverClientPromoKey) && (
            <ParetoPagination />
        )}
        {!getIsPitchPage(serverClientPromoKey) && (
            <Contact isTextShadowLight />
        )}
        {!getIsPromoHomepage(serverClientPromoKey) && (
            <HomepageButton />
        )}
    </div>
)

PromoFooter.propTypes = {
    serverClientPromoKey: PropTypes.string.isRequired,
}

export default getPromoServerClientHoc(PromoFooter)
