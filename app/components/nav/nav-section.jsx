import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import NavBook from './nav-book'
import NavToggle from './nav-toggle'
import NavBookButton from './nav-book-button'
import NavLogueButton from './nav-logue-button'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const passReduxStateToProps = ({
    selectedSongIndex,
    // accessedNavSongIndex,
    showSingleBookColumn,
    shownBookColumnIndex
}) => ({
// Pass Redux state into component props.
    selectedSongIndex,
    // accessedNavSongIndex,
    showSingleBookColumn,
    shownBookColumnIndex
})

/*************
 * CONTAINER *
 *************/

// TODO: Make single component.
class NavSection extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'showSingleBookColumn',
                    // 'accessedNavSongIndex',
                    // 'selectedSongIndex',
                    'shownBookColumnIndex'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        return (
            <NavSectionView {...this.props} />
        )
    }
}

NavSection.propTypes = {
    showSingleBookColumn: PropTypes.bool.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    shownBookColumnIndex: PropTypes.number.isRequired,
    handleNavExpand: PropTypes.func,
    handleNavBookSelect: PropTypes.func,
    handleNavSongSelect: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const NavSectionView = ({

    // From props.
    // selectedSongIndex,
    // accessedNavSongIndex,
    shownBookColumnIndex,
    showSingleBookColumn,

    handleNavExpand,
    handleNavSongSelect,
    handleNavBookSelect

}) => {
    const navItemProps = {
        handleNavSongSelect
    }

    return (
        <div
            className={classnames(
                'section',
                'nav-section',
                showSingleBookColumn ? 'single-book-column' : 'double-book-column'
            )}
        >
            <div className="live-nav-block">
                <NavToggle
                    handleNavExpand={handleNavExpand}
                />
                <div className="books-block">
                    <div className={classnames(
                        'books-column-block',
                        'column-1',
                        !showSingleBookColumn || shownBookColumnIndex === 0 ? ' column-shown' : ' column-hidden'
                    )}>
                        <div className="books-column">
                            {/* songs 1 - 9 */}
                            <NavBook {...navItemProps}
                                bookIndex={0}
                            />
                            {/* prologue or toggle */}
                            {/* TODO: Make this a single component, not a ternary. */}
                            {showSingleBookColumn && shownBookColumnIndex === 1 ?
                                <NavBookButton
                                    bookIndex={0}
                                    handleButtonClick={handleNavBookSelect}
                                /> :
                                <NavLogueButton {...navItemProps}
                                    isPrologue={true}
                                />
                            }
                        </div>
                    </div>
                    <div className={classnames(
                        'books-column-block',
                        'column-2',
                        !showSingleBookColumn || shownBookColumnIndex === 1 ? ' column-shown' : ' column-hidden'
                    )}>
                        <div className="books-column">
                            {/* songs 10 - 18 */}
                            <NavBook {...navItemProps}
                                bookIndex={1}
                            />
                            {/* epilogue or toggle */}
                            {showSingleBookColumn && shownBookColumnIndex === 0 ?
                                <NavBookButton
                                    bookIndex={1}
                                    handleButtonClick={handleNavBookSelect}
                                /> :
                                <NavLogueButton {...navItemProps}
                                    isPrologue={false}
                                />
                            }
                        </div>
                        {/* column 2 toggle */}
                    </div>
                </div>
            </div>
        </div>
    )
}

NavSectionView.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,
    accessedNavSongIndex: PropTypes.number.isRequired,
    showSingleBookColumn: PropTypes.bool.isRequired,
    shownBookColumnIndex: PropTypes.number.isRequired,

    // From parent.
    handleNavExpand: PropTypes.func,
    handleNavBookSelect: PropTypes.func,
    handleNavSongSelect: PropTypes.func.isRequired
}

export default connect(passReduxStateToProps)(NavSection)
