// Section to show the stage proscenium.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

const mapStateToProps = ({
    loadStore: { appMounted },
    changeStore: { isSongBeingSelected }
}) => ({
    appMounted,
    isSongBeingSelected
})

class Curtains extends PureComponent {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        isSongBeingSelected: PropTypes.bool.isRequired
    }

    render() {
        const {
            appMounted,
            isSongBeingSelected
        } = this.props

        return (
            <div
                {...{
                    className: cx(
                        'Curtains',
                        {
                            'Curtains__parted':
                                !isSongBeingSelected && appMounted
                        },
                        'abF'
                    )
                }}
            >
                <div className={cx(
                    'Curtains__left',
                    'Curtains__side',
                    'Curtains__child'
                )} />
                <div className={cx(
                    'Curtains__right',
                    'Curtains__side',
                    'Curtains__child'
                )} />
                <div className={cx(
                    'Curtains__top',
                    'Curtains__child'
                )} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Curtains)
