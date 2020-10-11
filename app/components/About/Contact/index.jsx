import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../DidMountHoc'
import { CONTACT_EMAIL } from '../../../constants/website'
import './style'

const AboutContact = ({ didMount }) => didMount && (
    <>
        {'If you have an offer or opportunity for us to consider, please email '}
        {didMount && (
            <span
                {...{
                    className: cx(
                        'AboutContact__email',
                        'Rancho'
                    )
                }}
            >
                {CONTACT_EMAIL.split('').map((character, index) => (
                    <Fragment {...{ key: index }} >
                        <span {...{ className: 'dNC' }}>
                            {String.fromCharCode(
                                character.charCodeAt(0) + 1
                            )}
                        </span>
                        <span>{character}</span>
                    </Fragment>
                ))}
            </span>
        )}
        {`. We'll respond if it matches our interests. Thanks!`}
    </>
)

AboutContact.propTypes = {
    didMount: PropTypes.bool.isRequired
}

export default memo(getDidMountHoc(AboutContact))
