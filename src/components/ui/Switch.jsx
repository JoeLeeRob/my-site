import { useState, useEffect } from 'react'

function Switch({ 
  label = '', 
  checked = false, 
  onChange, 
  disabled = false,
  size = 'medium' 
}) {
  const [isChecked, setIsChecked] = useState(checked)

  // Sync internal state with prop changes
  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const handleToggle = () => {
    if (disabled) return
    
    const newValue = !isChecked
    setIsChecked(newValue)
    
    if (onChange) {
      onChange(newValue)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggle()
    }
  }

  const sizeClasses = {
    small: {
      track: 'w-10 h-5',
      thumb: 'w-4 h-4',
      translate: 'translate-x-5'
    },
    medium: {
      track: 'w-12 h-6',
      thumb: 'w-5 h-5',
      translate: 'translate-x-6'
    },
    large: {
      track: 'w-14 h-7',
      thumb: 'w-6 h-6',
      translate: 'translate-x-7'
    }
  }

  const sizes = sizeClasses[size] || sizeClasses.medium

  return (
    <div className="flex items-center gap-3">
      {label && (
        <label 
          htmlFor={`toggle-${label}`}
          className={`text-sm text-white cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {label}
        </label>
      )}
      <button
        id={label ? `toggle-${label}` : undefined}
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-label={label || 'Toggle switch'}
        disabled={disabled}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={`
          ${sizes.track}
          relative inline-flex items-center rounded-full p-0
          transition-colors duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-slate-500
          ${isChecked ? 'bg-slate-500' : 'bg-slate-700'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <span
          className={`
            ${sizes.thumb}
            inline-block transform rounded-full bg-white
            transition-transform duration-200 ease-in-out
            ${isChecked ? sizes.translate : 'translate-x-1'}
            shadow-md
          `}
        />
      </button>
    </div>
  )
}

export default Switch

