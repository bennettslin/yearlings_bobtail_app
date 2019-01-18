// Button to toggle between left and right columns.

import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'

import AdminDispatcher from '../../../../dispatchers/AdminDispatcher'
import Button from '../../../Button'

import { populateRefs } from 'helpers/ref'

import { GLOBAL_ANNOTATIONS_TOGGLE_KEY } from 'constants/access'
import { LYRIC_GLOBAL_ANNOTATIONS_BUTTON_KEY } from 'constants/buttons'

class LyricToggleGlobalAnnotations extends PureComponent {

    _handleButtonClick = () => {
        this.dispatchGlobalAnnotations()
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <div className={cx(
                'LyricToggleGlobalAnnotations',
                'LyricToggle',
                'LyricToggle__shown',
                'length__buttonLarge'
            )}>
                <Button
                    isLargeSize
                    {...{
                        buttonName: LYRIC_GLOBAL_ANNOTATIONS_BUTTON_KEY,
                        accessKey: GLOBAL_ANNOTATIONS_TOGGLE_KEY,
                        handleButtonClick: this._handleButtonClick
                    }}
                />
                <AdminDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default LyricToggleGlobalAnnotations
