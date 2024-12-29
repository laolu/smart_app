import { contextBridge } from 'electron'

// 在这里定义暴露给渲染进程的 API
contextBridge.exposeInMainWorld('electronAPI', {
  // 示例：获取版本信息
  getVersion: () => process.versions,
  
  // 示例：获取平台信息
  getPlatform: () => process.platform,
  
  // 这里可以添加更多的 API
})

// 在预加载脚本完成时通知主进程
window.addEventListener('DOMContentLoaded', () => {
  console.log('Preload script loaded')
}) 