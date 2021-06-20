import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import FacebookButton from './FacebookButton'
import TwitterButton from './TwitterButton'
import UrlButton from './UrlButton'
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
        <UrlButton {...{ annotationIndex }} />
        <TwitterButton {...{ annotationIndex }} />
        <FacebookButton {...{ annotationIndex }} />
    </div>
)

SocialMediaButtons.propTypes = {
    annotationIndex: PropTypes.number,
}

export default SocialMediaButtons
