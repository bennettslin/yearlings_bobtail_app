import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import Anchor from '../../Anchor'
import { ALBUM_TITLE } from '../../../constants/paths'
import { BOBTAIL_YEARLINGS_WEBSITE } from '../../../constants/website'
import './style'

const AboutTitle = ({ didMount }) => {
    const handleAnchorClick = () => {
        // TODO: Analytics.
    }

    return (
        <>
            <i
                {...{
                    ...didMount && {
                        className: cx(
                            'About__albumTitle',
                            'fontColour__title',
                            'fontSize__largeTitle',
                            'Rancho',
                        ),
                    },
                }}
            >
                {ALBUM_TITLE}
            </i>
            <div>
                {'by '}
                <span
                    {...{
                        ...didMount && {
                            className: cx(
                                'About__bandName',
                                'fontColour__title',
                                'Rancho',
                            ),
                        },
                    }}
                >
                    <Anchor
                        {...{
                            href: BOBTAIL_YEARLINGS_WEBSITE,
                            text: 'Bobtail Yearlings',
                            analyticsLabel: 'band',
                            handleAnchorClick,
                        }}
                    />
                </span>
            </div>
        </>
    )
}

AboutTitle.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(AboutTitle)
