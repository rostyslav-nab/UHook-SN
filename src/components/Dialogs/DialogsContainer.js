import {actions} from "../redux/dialogsReducer"
import {Dialogs} from "./Dialogs"
import {connect} from "react-redux"
import {WithAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(actions.sendMessageCreator(newMessageBody))
        }
    }
}

const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

export default DialogsContainer