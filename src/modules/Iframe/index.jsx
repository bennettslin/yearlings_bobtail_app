import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Spinner from '../Spinner'
import './style'

const Iframe = forwardRef(({
    className,
    isShown,
    isLoading,
    onLoad,

}, ref) => (
    <div
        {...{
            className: cx(
                className,
                'Iframe',
            ),
        }}
    >
        {isLoading &&
            <div
                {...{
                    className: cx(
                        'Iframe__spinner',
                        'abF',
                        'fCC',
                    ),
                }}
            >
                <Spinner />
            </div>
        }
        {isShown && (
            <iframe
                {...{
                    ref,
                    className: cx(
                        'Iframe__window',
                        !isLoading && 'Iframe__window__loaded',
                    ),
                    tabIndex: -1,
                    onLoad,
                }}
            />
        )}
    </div>
))

Iframe.propTypes = {
    className: PropTypes.string.isRequired,
    isShown: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onLoad: PropTypes.func.isRequired,
}

export default Iframe
