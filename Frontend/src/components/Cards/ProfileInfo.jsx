import { getInitials } from "../../utils/helper"

const ProfileInfo = ({onLogout}) => {
    
  return (
    <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify center rounded-full text-slate-950 font-meidum bg-slate-100">{getInitials("John Williams")}</div>
        <div>
            <p className="text-sm font-medium">John Williams</p>
            <button className="text-sm text-slate-700 underline" onClick={onLogout}>LogOut</button>
        </div>
    </div>
  )
}

export default ProfileInfo
