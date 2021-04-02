import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../components/Texts'
import './style'

const DeprecatedContainer = () => (
    <div
        {...{
            className: cx(
                'DeprecatedContainer',
                'fontColour__title',
                'fontSize__largeTitle',
                'Rancho',
                'abF',
                'fCC',
            ),
        }}
    >
        <Texts {...{ text: 'Sorry, this browser is not supported.' }} />
    </div >
)

DeprecatedContainer.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default DeprecatedContainer
