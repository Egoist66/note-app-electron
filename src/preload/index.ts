import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron';

if(!process.contextIsolated){
  throw new Error('Preload must be run in a context isolated manner')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args),
    readNotes: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('readNote', ...args),
    writeNotes: (...args: Parameters<WriteNote>) => ipcRenderer.invoke('writeNote', ...args),
    createNote: (...args: Parameters<CreateNote>) => ipcRenderer.invoke('createNote', ...args),
    deleteNote: (...args: Parameters<DeleteNote>) => ipcRenderer.invoke('deleteNote', ...args),
   
    
  })
} 
catch (error) {
  console.error(error)
}