import { contextBridge } from 'electron'

if(!process.contextIsolated){
  throw new Error('Preload must be run in a context isolated manner')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language
    
  })
} 
catch (error) {
  console.error(error)
}