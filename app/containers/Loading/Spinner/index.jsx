import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const LoadingSpinner = ({ width, spin }) => (
    <svg
        {...{
            className: cx(
                'LoadingSpinner',
                `LoadingSpinner__spin${spin}`,
            ),
            style: {
                width: `${width}%`,
            },
            viewBox: '0 0 10 10',
            xmlns: 'http://www.w3.org/2000/svg',
        }}
    >
        <title>Loading</title>
        <defs>
            <linearGradient id="firstStroke" x1=".5" y1="0" x2="0" y2=".5">
                <stop stopColor="#c9c2a6" stopOpacity="1" />
                <stop stopColor="#c9c2a6" stopOpacity=".75" offset="1" />
            </linearGradient>
            <linearGradient id="secondStroke" x1="0" y1=".5" x2=".5" y2="1">
                <stop stopColor="#c9c2a6" stopOpacity=".75" />
                <stop stopColor="#c9c2a6" stopOpacity=".5" offset="1" />
            </linearGradient>
            <linearGradient id="thirdStroke" x1=".5" y1="1" x2="1" y2=".5">
                <stop stopColor="#c9c2a6" stopOpacity=".5" />
                <stop stopColor="#c9c2a6" stopOpacity=".25" offset="1" />
            </linearGradient>
            <linearGradient id="fourthStroke" x1="1" y1=".5" x2="0" y2="0">
                <stop stopColor="#c9c2a6" stopOpacity=".25" />
                <stop stopColor="#c9c2a6" stopOpacity="0" offset="1" />
            </linearGradient>
        </defs>
        <g fill="none" strokeWidth="3">
            <path stroke="url(#firstStroke)" d="M 5 1 A 4 4 0 0 0 1 5" />
            <path stroke="url(#secondStroke)" d="M 1 5 A 4 4 0 0 0 5 9" />
            <path stroke="url(#thirdStroke)" d="M 5 9 A 4 4 0 0 0 9 5" />
            <path stroke="url(#fourthStroke)" d="M 9 5 A 4 4 0 0 0 7 1.536" />
        </g>
    </svg>
)

LoadingSpinner.propTypes = {
    width: PropTypes.number.isRequired,
    spin: PropTypes.number.isRequired,
}

export default LoadingSpinner
