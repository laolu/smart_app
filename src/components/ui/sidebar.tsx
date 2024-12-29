"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { PanelLeft } from "lucide-react"

interface SidebarContextValue {
  isMobile: boolean
  isOpen: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextValue>({
  isMobile: false,
  isOpen: true,
  toggleSidebar: () => {},
})

export function useSidebar() {
  return React.useContext(SidebarContext)
}

export function SidebarHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("border-b px-4 py-3", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex-1 overflow-auto px-4 py-2", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("border-t px-4 py-3", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarGroup({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarGroupLabel({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("px-2 text-xs font-medium text-muted-foreground", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function SidebarMenu({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={cn("space-y-1", className)} {...props}>
      {children}
    </ul>
  )
}

export function SidebarMenuItem({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li className={cn("group/sidebar-menu-item flex flex-col", className)} {...props}>
      {children}
    </li>
  )
}

export function SidebarMenuSub({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn(
        "relative space-y-1 py-1.5 pl-6 before:absolute before:inset-y-1 before:left-3 before:w-px before:bg-border",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  )
}

interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  isActive?: boolean
  size?: "default" | "sm" | "lg"
  tooltip?: string
}

export const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(({ className, asChild = false, isActive, size = "default", tooltip, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      className={cn(
        "group flex items-center gap-2 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground [&>svg]:shrink-0",
        size === "default" && "px-2 py-1.5 [&>svg]:size-4",
        size === "sm" && "px-2 py-1 [&>svg]:size-4",
        size === "lg" && "px-3 py-2 [&>svg]:size-4",
        isActive && "bg-accent text-accent-foreground",
        className
      )}
      title={tooltip}
      {...props}
    />
  )
})
SidebarMenuButton.displayName = "SidebarMenuButton"

export const SidebarMenuSubButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      className={cn(
        "group flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export function SidebarMenuAction({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1 opacity-0 transition-opacity group-hover/sidebar-menu-item:opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function SidebarTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("shrink-0", className)}
      onClick={toggleSidebar}
      {...props}
    >
      <PanelLeft className="size-4" />
      <span className="sr-only">切换侧边栏</span>
    </Button>
  )
}

export function SidebarRail({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "absolute inset-y-0 right-0 w-1 cursor-ew-resize bg-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function SidebarInset({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen } = useSidebar()

  return (
    <div
      className={cn(
        "flex min-h-screen flex-1 flex-col bg-background transition-[margin] duration-300 ease-in-out",
        isOpen ? "ml-[--sidebar-width]" : "ml-0",
        "md:ml-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function SidebarProvider({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [isMobile, setIsMobile] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(true)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleSidebar = React.useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <SidebarContext.Provider value={{ isMobile, isOpen, toggleSidebar }}>
      <div
        className={cn(
          "flex min-h-screen w-full bg-background",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

export function Sidebar({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen } = useSidebar()

  return (
    <div
      className={cn(
        "group/sidebar-wrapper fixed inset-y-0 z-30 flex w-[--sidebar-width] -translate-x-full flex-col border-r bg-background transition-transform duration-300 ease-in-out data-[state=open]:translate-x-0 md:sticky md:translate-x-0",
        isOpen && "data-[state=open]:translate-x-0",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      <div className="flex flex-1 flex-col overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export function SidebarMenuSubItem({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li className={cn("flex flex-col", className)} {...props}>
      {children}
    </li>
  )
}
