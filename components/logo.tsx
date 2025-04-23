import type React from "react"

interface LogoProps {
  variant?: "light" | "dark"
  className?: string
}

const Logo: React.FC<LogoProps> = ({ variant = "light", className = "" }) => {
  // Light variant = texto preto para fundos claros
  // Dark variant = texto branco para fundos escuros
  const textColor = variant === "light" ? "text-black" : "text-white"

  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`text-xl md:text-2xl font-bold ${textColor} leading-tight`}>
        Mello Costa<span className="text-[#f0544f]">.</span>
      </div>
      <div
        className={`text-[0.6rem] md:text-xs tracking-widest font-light ${textColor} text-center`}
        style={{ marginTop: "-2px", marginLeft: "1px" }}
      >
        ADVOGADOS
      </div>
    </div>
  )
}

export default Logo
