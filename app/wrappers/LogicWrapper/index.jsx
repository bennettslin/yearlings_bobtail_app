import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapVerseCursorIndex } from '../../redux/cursor/selector'
import { getPrefixedVerseClassNames } from './helper'

const LogicWrapper = ({ children }) => {
    const verseCursorIndex = useSelector(mapVerseCursorIndex)

    return (
        <div
            {...{
                className: cx(
                    'LogicWrapper',
                    getPrefixedVerseClassNames(verseCursorIndex)
                )
            }}
        >
            {children}
        </div>
    )
}

LogicWrapper.propTypes = {
    children: PropTypes.any.isRequired
}

export default LogicWrapper
