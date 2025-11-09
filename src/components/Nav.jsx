
function Nav() {
  return (
    <>
    <div className="h-full w-16 border-r border-slate-700 text-white flex flex-col items-center py-4 gap-6">
        <ul className="flex flex-col items-center gap-4">
            <li>
              <button className="h-8 w-8 rounded-full bg-slate-600" aria-label="Home" />
            </li>
            <li>
              <button className="h-8 w-8 rounded-full bg-slate-600" aria-label="About" />
            </li>
            <li>
              <button className="h-8 w-8 rounded-full bg-slate-600" aria-label="Projects" />
            </li>
            <li>
              <button className="h-8 w-8 rounded-full bg-slate-600" aria-label="Blog" />
            </li>
            <li>
              <button className="h-8 w-8 rounded-full bg-slate-600" aria-label="Contact" />
            </li>
        </ul>
    </div>
    </>
  )
}

export default Nav