import React, { PureComponent } from 'react'
import cx from 'classnames'

import { removeLoadingIndicator } from 'utils/window'

class Actors extends PureComponent {
    componentDidMount() {
        logMount('Actors')
        removeLoadingIndicator()
        this.focusActorsElement()
    }

    focusActorsElement = () => {
        this.actorsElement.focus()
    }

    setActorsElement = node => this.actorsElement = node

    render() {
        return (
            <div
                {...{
                    ref: this.setActorsElement,
                    className: cx(
                        'Actors',
                        'abF'
                    ),
                    tabIndex: -1
                }}
            >
            </div>
        )
    }
}

export default Actors
