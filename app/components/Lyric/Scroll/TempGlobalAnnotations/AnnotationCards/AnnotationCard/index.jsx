// Component to show individual annotation note or all wormholes.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Texts from '../../../../../Texts'

import { ALL_DOT_KEYS } from 'constants/dots'

class AnnotationCard extends PureComponent {

    static propTypes = {
        card: PropTypes.any.isRequired
    }

    render() {
        const {
            card: {
                description,
                dotKeys = {}
            }
        } = this.props

        return (
            <div className="TempGlobalAnnotationCard">
                <div className="TempGlobalAnnotationCard__dotKeys">
                    {ALL_DOT_KEYS.filter(dotKey => (
                        dotKeys[dotKey]
                    )).join(', ')}
                </div>
                <Texts {...{ text: description }} />
            </div>
        )
    }
}

export default AnnotationCard
