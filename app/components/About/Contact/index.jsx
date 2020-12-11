import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../DidMountHoc'
import PitchAnchor from '../../PitchAnchor'
import { CONTACT_EMAIL } from '../../../constants/website'
import './style'

const AboutContact = ({ didMount }) => didMount && (
    <span
        {...{
            className: 'AboutContact'
        }}
    >
        {/* {'If you have an offer or opportunity for us to consider, please email '} */}
        {`We'd love to hear from ambitious musicians, record labels and the music press, and anyone with an offer or opportunity for us to consider. Please email `}
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
        {/* {`. We'll respond if it matches our interests.`} */}
        {`. Thanks!`}
        <PitchAnchor />
    </span>
)

AboutContact.propTypes = {
    didMount: PropTypes.bool.isRequired
}

export default memo(getDidMountHoc(AboutContact))
