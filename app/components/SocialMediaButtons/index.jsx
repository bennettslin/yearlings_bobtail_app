import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import FacebookButton from './FacebookButton'
import TwitterButton from './TwitterButton'
import CopyUrlButton from './CopyUrlButton'
import './style'

const SocialMediaButtons = ({ annotationIndex }) => (
    <div
        {...{
            className: cx(
                'SocialMediaButtons',
                'fCC',
            ),
        }}
    >
        <CopyUrlButton {...{ annotationIndex }} />
        {isNaN(annotationIndex) && (
            <>
                <TwitterButton />
                <FacebookButton />
            </>
        )}
    </div>
)

SocialMediaButtons.propTypes = {
    annotationIndex: PropTypes.number,
}

export default SocialMediaButtons
