import React, { memo } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../DidMountHoc'
import Anchor from '../../Anchor'
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
                            'About__colouredText',
                            'Rancho'
                        )
                    }
                }}
            >
                {`Yearling's Bobtail`}
            </i>
            <div>
                {'by '}
                <span
                    {...{
                        ...didMount && {
                            className: cx(
                                'About__bandName',
                                'About__colouredText',
                                'Rancho'
                            )
                        }
                    }}
                >
                    <Anchor
                        {...{
                            href: BOBTAIL_YEARLINGS_WEBSITE,
                            text: 'Bobtail Yearlings',
                            analyticsIdentifier: 'BobtailYearlings',
                            handleAnchorClick
                        }}
                    />
                </span>
            </div>
        </>
    )
}

AboutTitle.propTypes = {
    didMount: PropTypes.bool.isRequired
}

export default memo(getDidMountHoc(AboutTitle))
