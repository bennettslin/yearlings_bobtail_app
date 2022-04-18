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

PromoFooter.propTypes = {
    serverClientPromoKey: PropTypes.string.isRequired,
}

export default getPromoServerClientHoc(PromoFooter)
