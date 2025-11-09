
import logo from '../assets/jr-logo-wht.png'
import Switch from './ui/Switch'

function Header() {
  return (
    <>
    <div className="flex items-center justify-between px-4 py-3 text-white">
        <div className="flex items-center gap-4">
          <img src={logo} alt="JR Logo" className="h-8 w-8" />
          <span className="text-sm uppercase tracking-wider">Logo</span>
          <Switch />
        </div>
        <div className="flex items-center gap-2">
          <button className="h-8 px-3 rounded bg-slate-700 text-xs" aria-label="Toggle theme">Theme</button>
          <button className="h-8 px-3 rounded bg-slate-700 text-xs" aria-label="Login">Login</button>
        </div>
    </div>
    </>
  )
}

export default Header