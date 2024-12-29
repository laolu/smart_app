"use client"

import {
  Forward,
  MoreVertical,
  Trash2,
  type LucideIcon,
} from "lucide-react"
import { Link } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

interface NavProjectsProps {
  projects: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}

export function NavProjects({ projects }: NavProjectsProps) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>项目列表</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((project) => (
          <SidebarMenuItem key={project.url}>
            <div className="group flex w-full items-center rounded-lg hover:bg-accent hover:text-accent-foreground">
              <SidebarMenuButton asChild className="flex-1">
                <Link to={project.url}>
                  <project.icon className="size-4" />
                  <span>{project.name}</span>
                </Link>
              </SidebarMenuButton>
              <div className="flex items-center px-2 opacity-0 transition-opacity group-hover:opacity-100">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="size-6 rounded-md p-0.5 hover:bg-accent-foreground/10">
                      <MoreVertical className="size-full" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    side={isMobile ? "bottom" : "right"}
                    sideOffset={4}
                  >
                    <DropdownMenuItem className="gap-2">
                      <Forward className="size-4" />
                      <span>分享</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="gap-2 text-destructive">
                      <Trash2 className="size-4" />
                      <span>删除</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
} 