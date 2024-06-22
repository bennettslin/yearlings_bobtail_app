import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import Anchor from '../../Anchor'
import { getTitleForAlbum } from '../../../endpoint/album/title'
import { BOBTAIL_YEARLINGS_WEBSITE } from '../../../constants/website'
import './style'

const AboutTitle = ({ didMount }) => (
    <>
        <i
            {...{
                ...didMount && {
                    className: cx(
                        'About__albumTitle',
                        'fontColour__title',
                        'fontSize__largeTitle',
                        'font__heading',
                    ),
                },
            }}
        >
            {getTitleForAlbum()}
        </i>
        <div>
            {'by '}
            <span
                {...{
                    ...didMount && {
                        className: cx(
                            'About__bandName',
                            'fontColour__title',
                            'font__heading',
                        ),
                    },
                }}
            >
                <Anchor
                    {...{
                        externalLink: BOBTAIL_YEARLINGS_WEBSITE,
                        text: 'Bobtail Yearlings',
                        analyticsLabel: 'band',
                    }}
                />
            </span>
        </div>
    </>
)

AboutTitle.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(AboutTitle)
