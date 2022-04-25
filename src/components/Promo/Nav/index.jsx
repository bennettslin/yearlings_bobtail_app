import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Contact from '../../Contact'
import PitchPagination from '../../Promos/Pitch/Pagination'
import HomepageButton from './HomepageButton'
import {
    getIsPitchPage,
    getIsPromoHomepage,
} from '../../../helpers/promo'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import './style'

const PromoNav = ({ serverClientPromoKey }) => (
    <div
        {...{
            className: cx(
                'PromoNav',
                'promo__child',
                'fCC',
            ),
        }}
    >
        {getIsPitchPage(serverClientPromoKey) ? (
            <PitchPagination />
        ) : (
            <Contact isTextShadowLight />
        )}
        {!getIsPromoHomepage(serverClientPromoKey) && (
            <HomepageButton />
        )}
    </div>
)

PromoNav.propTypes = {
    serverClientPromoKey: PropTypes.string.isRequired,
}

export default getPromoServerClientHoc(PromoNav)
