import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectWikiIndex } from 'flux/actions/storage'
import { setCarouselAnnotationIndex } from 'flux/actions/session'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

class WikiManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectWikiIndex: PropTypes.func.isRequired,
        setCarouselAnnotationIndex: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedSongIndex !== prevProps.selectedSongIndex) {
            this.selectWiki()
        }
    }

    selectWiki({
        selectedWikiIndex = 0,
        carouselAnnotationIndex = 0
    } = {}) {
        this.props.selectWikiIndex(selectedWikiIndex)
        this.props.setCarouselAnnotationIndex(carouselAnnotationIndex)
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedSongIndex
}) => ({
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectWikiIndex,
        setCarouselAnnotationIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(WikiManager)
