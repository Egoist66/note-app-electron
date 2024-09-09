import { ElectronAPI } from '@electron-toolkit/preload'
import type { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from '@shared/types'

declare global {
  interface Window {
    context: {
      locale: string,
      getNotes: GetNotes,
      readNotes: ReadNote,
      writeNotes: WriteNote,
      createNote: CreateNote,
      deleteNote: DeleteNote

    }
  }
}


