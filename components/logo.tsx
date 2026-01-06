import type React from "react"

interface LogoProps {
  variant?: "light" | "dark"
  className?: string
}

const Logo: React.FC<LogoProps> = ({ variant = "light", className = "" }) => {
  const textColor = variant === "light" ? "text-white" : "text-gray-900"

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-baseline">
        <span className={`text-xl md:text-2xl font-serif font-semibold ${textColor}`}>Raíssa Mello</span>
        <span className="text-red-500 text-xl md:text-2xl font-serif font-bold">.</span>
      </div>
      <span className={`text-[10px] md:text-xs tracking-[0.2em] font-light ${textColor} mt-0.5`}>ADVOGADA</span>
    </div>
  )
}

export default Logo
