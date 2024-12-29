"use client"

import {
  Code2,
  FileVideo,
  FolderOpen,
  Home,
  Library,
  Settings,
  MessageCircle,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavUser } from "@/components/layout/nav-user"
import { NavMain } from "@/components/layout/nav-main"
import { NavProjects } from "@/components/layout/nav-projects"
import { TeamSwitcher } from "@/components/layout/team-switcher"
import { routes } from "@/config/routes"

const teams = [
  {
    name: "视频编辑",
    logo: FileVideo,
    plan: "免费版",
  },
  {
    name: "代码编辑",
    logo: Code2,
    plan: "专业版",
  },
]

const menuItems = [
  {
    title: "首页",
    url: routes.home,
    icon: Home,
  },
  {
    title: "资源库",
    url: routes.library.root,
    icon: Library,
    items: [
      {
        title: "视频素材",
        url: routes.library.videos,
        icon: FileVideo,
      },
      {
        title: "项目文件",
        url: routes.library.projects,
        icon: FolderOpen,
      },
    ],
  },
  {
    title: "弹幕监控",
    url: routes.danmaku.monitor,
    icon: MessageCircle,
    isActive: true,
  },
  {
    title: "设置",
    url: routes.settings,
    icon: Settings,
  },
]

const projects = [
  {
    name: "示例项目 1",
    url: routes.projects.detail("1"),
    icon: FileVideo,
    items: [
      {
        title: "项目设置",
        url: `${routes.projects.detail("1")}/settings`,
        icon: Settings,
      },
      {
        title: "项目资源",
        url: `${routes.projects.detail("1")}/assets`,
        icon: FolderOpen,
      },
    ],
  },
  {
    name: "示例项目 2",
    url: routes.projects.detail("2"),
    icon: FileVideo,
    items: [
      {
        title: "项目设置",
        url: `${routes.projects.detail("2")}/settings`,
        icon: Settings,
      },
      {
        title: "项目资源",
        url: `${routes.projects.detail("2")}/assets`,
        icon: FolderOpen,
      },
    ],
  },
  {
    name: "示例项目 3",
    url: routes.projects.detail("3"),
    icon: FileVideo,
    items: [
      {
        title: "项目设置",
        url: `${routes.projects.detail("3")}/settings`,
        icon: Settings,
      },
      {
        title: "项目资源",
        url: `${routes.projects.detail("3")}/assets`,
        icon: FolderOpen,
      },
    ],
  },
]

const user = {
  name: "示例用户",
  email: "example@example.com",
  avatar: "https://github.com/shadcn.png",
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={menuItems} />
        <NavProjects projects={projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
} 