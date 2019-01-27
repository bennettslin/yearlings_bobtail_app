// Section to show the stage proscenium.

import React from 'react'
import cx from 'classnames'

import Svg from '../../../modules/Svg'
import AspectRatio from '../AspectRatio'

const Proscenium = () => (
    <AspectRatio
        isProscenium
    >
        <Svg
            {...{
                className: cx(
                    'Proscenium',
                    'abF'
                )
            }}
        >
            <rect
                {...{
                    className: cx(
                        'Proscenium__rect'
                    ),
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100
                }}
            />
        </Svg>
    </AspectRatio>
)

export default Proscenium
