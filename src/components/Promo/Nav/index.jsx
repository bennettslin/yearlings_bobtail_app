import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import Contact from '../../Contact'
import PitchPagination from '../../Promos/Pitch/Pagination'
import BackButton from './BackButton'
import HomepageButton from './HomepageButton'
import {
    getIsDownloadPage,
    getIsPitchPage,
    getIsPromoHomepage,
} from '../../../helpers/promo'
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
        <div
            {...{
                className: 'fCC',
            }}
        >
            <HomepageButton
                {...{
                    isSelected: getIsPromoHomepage(serverClientPromoKey),
                }}
            />
            <BackButton
                {...{
                    isDownloadPage: getIsDownloadPage(serverClientPromoKey),
                }}
            />
        </div>
    </div>
)

PromoNav.propTypes = {
    serverClientPromoKey: PropTypes.string.isRequired,
}

export default getPromoServerClientHoc(PromoNav)
