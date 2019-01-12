// Container to show multiple access icons in sequence.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import AccessLetter from '../Letter'

const mapStateToProps = ({
    deviceStore: { isDesktopWidth }
}) => ({
    isDesktopWidth
})

const propTypes = {
    // Through Redux.
    isDesktopWidth: PropTypes.bool.isRequired,

    // From parent.
    accessIconsName: PropTypes.string,
    isShadow: PropTypes.bool,
    showIfAccessed: PropTypes.bool,
    accessKeys: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired
}

const AccessLetters = memo(({
    isDesktopWidth,
    accessIconsName,
    isShadow,
    showIfAccessed,
    accessKeys

}) => {
    return isDesktopWidth && (
        <div className={cx(
            'AccessLetters',
            accessIconsName && `AccessLetters__${accessIconsName}`
        )}>
            {accessKeys.map(accessKey => {

                return (
                    <AccessLetter
                        key={accessKey}
                        animateStandaloneOnKeyDown
                        {...{
                            accessKey,
                            isShadow,
                            showIfAccessed
                        }}
                    />
                )
            })}
        </div>
    )
})

AccessLetters.propTypes = propTypes

export default connect(mapStateToProps)(AccessLetters)
