type ButtonProps={
  className?: string
  onClick?: () => void
  tag?: string
}

const Button = ({className, tag}: ButtonProps) => {
  return(
    <button className={`btn btn-xs btn-accent sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl ${className}`}>{tag}</button>
  )
}

export default Button