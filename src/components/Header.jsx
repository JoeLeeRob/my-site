
function Header() {
  return (
    <>
    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700 bg-slate-900 text-white">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-slate-600 rounded" />
          <span className="text-sm uppercase tracking-wider">Logo</span>
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