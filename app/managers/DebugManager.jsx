import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectAdminIndex } from '../redux/actions/storage'

import { getCharStringForNumber } from '../helpers/formatHelper'
import { getPropsAreShallowEqual } from '../helpers/generalHelper'
import LogHelper from '../helpers/logHelper'

import { CUBE_Y_AXIS_LENGTH } from '../constants/stage'

class DebugManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedAdminIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,

        selectAdminIndex: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)

        this._assignDebugLogFunctions()
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    _assignDebugLogFunctions() {
        window.a = LogHelper.logAnchorAnnotation.bind(LogHelper, this)
        window.c = LogHelper.logAccessedAnnotation.bind(LogHelper, this)
        window.d = LogHelper.logDrawings.bind(LogHelper, this)
        window.p = LogHelper.logPortalLinks.bind(LogHelper, this.props)
        window.s = LogHelper.logSong.bind(LogHelper, this)
        window.v = LogHelper.logVerse.bind(LogHelper, this)
        window.t = LogHelper.logStorage.bind(LogHelper)

        // Quick and easy way to get a particular cube.
        window.getCube = (yIndex, xIndex, isFloor = true) => {
            return document.querySelector(
                `.Cubes__y${yIndex}${yIndex === 0 ? '__back' : ''}${yIndex === CUBE_Y_AXIS_LENGTH - 1 ? '__front' : ''}.Cubes__${isFloor ? 'floor' : 'ceiling'} .Cube__x${getCharStringForNumber(xIndex)}`
            )
        }
    }

    toggleAdmin(
        selectedAdminIndex = (this.props.selectedAdminIndex + 1) % 2
    ) {
        // If no argument passed, then just toggle between on and off.

        this.props.selectAdminIndex(selectedAdminIndex)
        return selectedAdminIndex
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedAdminIndex,
    selectedSongIndex
}) => ({
    selectedAdminIndex,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        selectAdminIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(DebugManager)
