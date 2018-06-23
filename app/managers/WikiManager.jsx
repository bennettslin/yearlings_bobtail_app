import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectWikiIndex } from '../redux/actions/storage'
import { setCarouselAnnotationIndex } from '../redux/actions/session'

class WikiManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectWikiIndex: PropTypes.func.isRequired,
        setCarouselAnnotationIndex: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRef(this)
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
