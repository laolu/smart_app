import {
  Music,
  FileVideo,
  Video,
  FolderOpen,
  Library,
  Settings2,
  Film,
  type LucideIcon,
} from "lucide-react"

export const sidebarData = {
  user: {
    name: "测试用户",
    email: "test@example.com",
    avatar: "/avatars/default.jpg"
  },
  navMain: [
    {
      title: "项目管理",
      url: "#",
      icon: FolderOpen,
      isActive: true,
      items: [
        {
          title: "最近项目",
          url: "#"
        },
        {
          title: "收藏项目",
          url: "#"
        },
        {
          title: "项目设置",
          url: "#"
        }
      ]
    },
    {
      title: "视频编辑",
      url: "#",
      icon: Video,
      items: [
        {
          title: "剪辑工具",
          url: "#"
        },
        {
          title: "特效处理",
          url: "#"
        },
        {
          title: "转场效果",
          url: "#"
        }
      ]
    },
    {
      title: "素材库",
      url: "#",
      icon: Library,
      items: [
        {
          title: "视频素材",
          url: "#"
        },
        {
          title: "音频素材",
          url: "#"
        },
        {
          title: "图片素材",
          url: "#"
        }
      ]
    },
    {
      title: "设置",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "基本设置",
          url: "#"
        },
        {
          title: "偏好设置",
          url: "#"
        },
        {
          title: "快捷键",
          url: "#"
        }
      ]
    }
  ],
  projects: [
    {
      name: "视频剪辑",
      url: "#",
      icon: FileVideo
    },
    {
      name: "特效制作",
      url: "#",
      icon: Film
    },
    {
      name: "音频处理",
      url: "#",
      icon: Music
    }
  ]
} 