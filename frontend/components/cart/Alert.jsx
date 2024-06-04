import { colors } from "../../styles/ele"


export default function Alert() {
  const style = {
     border : '1px solid green',
     backgroundColor : 'var(--one_white)',
     fontWeight : '500 !important'
  }
  return (
    <div className="w-100 px-2 py-2 rounded mb-5" style={style}>
       <p>You’ve got FREE delivery. Start checkout now!</p>
    </div>
  )
}
