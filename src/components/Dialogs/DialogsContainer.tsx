import {actions} from "../redux/dialogsReducer"
import {Dialogs} from "./Dialogs"
import {connect} from "react-redux"
import {WithAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"
import {AppStateType} from "../redux/redux-store"

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = compose(
    connect(mapStateToProps, {
        sendMessage: actions.sendMessage
    }),
    WithAuthRedirect
)(Dialogs)

export default DialogsContainer