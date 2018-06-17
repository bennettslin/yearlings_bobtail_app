import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectWikiIndex } from '../redux/actions/storage'
import { setCarouselAnnotationIndex } from '../redux/actions/session'

class WikiManager extends Component {

    static propTypes = {
        // Through Redux.
        selectWikiIndex: PropTypes.func.isRequired,
        setCarouselAnnotationIndex: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRef(this)
    }

    selectWiki({
        selectedWikiIndex = 0,
        carouselAnnotationIndex = 0
    }) {
        this.props.selectWikiIndex(selectedWikiIndex)
        this.props.setCarouselAnnotationIndex(carouselAnnotationIndex)
    }

    render() {
        return null
    }
}

const mapStateToProps = () => ({})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectWikiIndex,
        setCarouselAnnotationIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(WikiManager)
