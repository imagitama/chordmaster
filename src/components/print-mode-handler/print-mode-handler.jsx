import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { enterPrintMode, leavePrintMode } from '../../ducks/app/actions'

const PrintModeHandler = ({ enterPrintMode, leavePrintMode }) => {
  useEffect(() => {
    const onBeforePrint = () => enterPrintMode()
    const onAfterPrint = () => leavePrintMode()

    window.addEventListener('beforeprint', onBeforePrint)
    window.addEventListener('afterprint', onAfterPrint)

    return () => {
      window.removeEventListener('beforeprint', onBeforePrint)
      window.removeEventListener('afterprint', onAfterPrint)
    }
  }, [])
  return null
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      enterPrintMode,
      leavePrintMode
    },
    dispatch
  )

export default connect(
  null,
  mapDispatchToProps
)(PrintModeHandler)
