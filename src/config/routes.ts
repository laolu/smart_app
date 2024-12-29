export const routes = {
  home: "/",
  library: {
    root: "/library",
    videos: "/library/videos",
    projects: "/library/projects",
  },
  projects: {
    list: "/projects/list",
    detail: (id: string) => `/projects/${id}`,
  },
  danmaku: {
    monitor: "/danmaku/monitor",
  },
  settings: "/settings",
} as const 