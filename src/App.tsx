import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "@/app/page"
import LibraryPage from "@/app/library/page"
import LibraryVideosPage from "@/app/library/videos/page"
import LibraryProjectsPage from "@/app/library/projects/page"
import ProjectsPage from "@/app/projects/list/page"
import ProjectDetailPage from "@/app/projects/[id]/page"
import DanmakuMonitorPage from "@/app/danmaku/monitor/page"
import SettingsPage from "@/app/settings/page"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/library/videos" element={<LibraryVideosPage />} />
        <Route path="/library/projects" element={<LibraryProjectsPage />} />
        <Route path="/projects/list" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/danmaku/monitor" element={<DanmakuMonitorPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  )
} 