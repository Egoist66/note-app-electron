import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    context: {
      electron: {
        // TODO: add ipcRenderer here
      }
    }
  }
}


