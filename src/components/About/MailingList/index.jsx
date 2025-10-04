import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import Anchor from '../../Anchor'
import { MAILING_LIST_WEBSITE } from '../../../constants/website'

const MailingList = ({ didMount }) => (
    <>
        <span
            {...{
                ...didMount && {
                    className: cx(
                        'MailingList',
                    ),
                },
            }}
        >
            <Anchor
                {...{
                    externalLink: MAILING_LIST_WEBSITE,
                    text: 'Join our mailing list',
                    analyticsLabel: 'YearlingsBobtailSubstack',
                }}
            />
        </span>
        {`!`}
    </>
)

MailingList.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(MailingList)
