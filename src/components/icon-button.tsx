import React from 'react'

type IconButtonProps = {
  icon: React.ElementType
  label?: string
}

export default function IconButton({ icon: Icon, label }: IconButtonProps) {
  return (
    <button className="group flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 group-hover:bg-foreground/10">
        <Icon className="size-5 text-foreground group-hover:text-foreground/50" />
      </div>
      {label && <span className="text-sm text-muted-foreground">{label}</span>}
    </button>
  )
}
