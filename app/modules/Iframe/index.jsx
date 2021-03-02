import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Spinner from '../Spinner'

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
                'iframeContainer',
            ),
        }}
    >
        {isLoading &&
            <div
                {...{
                    className: cx(
                        'iframeContainer__spinner',
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
                        'iframeContainer__iframe',
                        !isLoading && 'iframeContainer__iframe__loaded',
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
