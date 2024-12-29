import * as fs from 'fs'
import * as path from 'path'

// 确保 dist-electron 目录存在
const distElectronPath = path.join(__dirname, '../dist-electron')
if (!fs.existsSync(distElectronPath)) {
  fs.mkdirSync(distElectronPath, { recursive: true })
} 