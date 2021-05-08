import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../hocs/DidMountHoc'
import LoadingDramaMasks from './DramaMasks'
import LoadingSpinner from './Spinner'
import './style'

const LoadingContainer = ({ didMount }) => {
    useEffect(() => {
        logServe(
            'Loading container loaded.',
            {
                action: 'container',
                label: 'loading',
            },
        )
    }, [])

    return !didMount && (
        <div
            {...{
                className: cx(
                    'LoadingContainer',
                    'abF',
                    'fCC',
                ),
            }}
        >
            <LoadingDramaMasks />
            <LoadingSpinner {...{ width: 44, spin: 1 }} />
            <LoadingSpinner {...{ width: 42, spin: 2 }} />
            <LoadingSpinner {...{ width: 40, spin: 3 }} />
        </div >
    )
}

LoadingContainer.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(LoadingContainer)
