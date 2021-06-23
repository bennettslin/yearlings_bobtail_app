import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import HomepagePromo from '../../Promos/Homepage'
import OnesheetPromo from '../../Promos/Onesheet'
import ArtupPromo from '../../Promos/Artup'
import Artup2Promo from '../../Promos/Artup2'
import SocialMediaButtons from '../../SocialMediaButtons'
import PromoScrollTitle from './Title'
import { getTitleForPromo } from '../../../api/promo'
import {
    getIsArtupPage,
    getIsArtup2Page,
    getIsOnesheetPage,
    getIsPromoHomepage,
} from '../../../helpers/promo'
import './style'

const PromoScroll = forwardRef(({
    serverClientPromoKey,
    handlePageChange = () => {},

}, ref) => {
    const handlePitchPageChange = () => {
        if (ref) {
            // Allow child to scroll back to top.
            ref.current.scrollTop = 0
            handlePageChange()
        }
    }

    return (
        <div
            {...{
                className: cx(
                    'PromoScroll',
                    'promo__child',
                    'fCC',
                ),
            }}
        >
            <div
                {...{
                    className: cx(
                        // Box shadow and gradient mask can't be on same element.
                        'PromoScroll__child',
                        'abF',
                        'ovH', // Rounds scrollbar.
                    ),
                }}
            >
                <div
                    {...{
                        ref,
                        className: cx(
                            'PromoScroll__grandchild',
                            'gradientMask__scrollBottom',
                            'foN',
                        ),
                        tabIndex: -1,
                    }}
                >
                    <SocialMediaButtons isPromoPage />
                    <PromoScrollTitle {... { title: getTitleForPromo(serverClientPromoKey) }} />
                    {getIsPromoHomepage(serverClientPromoKey) && (
                        <HomepagePromo {...{ handlePitchPageChange }} />
                    )}
                    {getIsOnesheetPage(serverClientPromoKey) && (
                        <OnesheetPromo {...{ handlePitchPageChange }} />
                    )}
                    {getIsArtupPage(serverClientPromoKey) && (
                        <ArtupPromo {...{ handlePitchPageChange }} />
                    )}
                    {getIsArtup2Page(serverClientPromoKey) && (
                        <Artup2Promo {...{ handlePitchPageChange }} />
                    )}
                </div>
            </div>
        </div>
    )
})

PromoScroll.propTypes = {
    serverClientPromoKey: PropTypes.string.isRequired,
    handlePageChange: PropTypes.func,
}

export default getPromoServerClientHoc(PromoScroll)
