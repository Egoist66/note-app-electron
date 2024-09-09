import { APP_DIR, FILE_ENCODING } from "@shared/constants";
import { NoteInfo } from "@shared/models";
import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from "@shared/types";
import { dialog } from "electron";
import {
  ensureDir,
  existsSync,
  readdir,
  readFile,
  remove,
  stat,
  writeFile,
} from "fs-extra";
import { homedir } from "os";
import path from "path";

export const getRootDir = () => {
  return `${homedir()}/${APP_DIR}`;
};

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir();

  await ensureDir(rootDir);
  const notesFileNames = await readdir(rootDir, {
    encoding: FILE_ENCODING,
    withFileTypes: false,
  });

  const notes = notesFileNames.filter((fileName) => fileName.endsWith(".md"));

  return Promise.all(notes.map(getNoteInfoFromFileName));
};

export const getNoteInfoFromFileName = async (
  fileName: string,
): Promise<NoteInfo> => {
  const fileStat = await stat(`${getRootDir()}/${fileName}`);

  return {
    title: fileName.replace(/\.md$/, ""),
    lastEditTime: fileStat.mtimeMs,
    id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
  };
};

export const readNote: ReadNote = async (fileName: string) => {
  if (existsSync(`${getRootDir()}/${fileName}.md`)) {
    return await readFile(`${getRootDir()}/${fileName}.md`.trim(), {
      encoding: FILE_ENCODING,
    });
  }

  return "";
};

export const writeNote: WriteNote = async (
  fileName: string,
  content: string,
) => {
  const notePath = `${getRootDir()}/${fileName}.md`;
  await ensureDir(getRootDir());

  console.info(`Writing note ${fileName} to ${notePath}`);

  await writeFile(notePath, content, { encoding: FILE_ENCODING });
};

export const createNote: CreateNote = async () => {
  await ensureDir(getRootDir());

  const { filePath, canceled } = await dialog.showSaveDialog({
    title: "Create a new Note",
    defaultPath: `${getRootDir()}/Untitled.md`,
    buttonLabel: "Create",
    properties: ["showOverwriteConfirmation"],
    showsTagField: false,
    filters: [{ name: "Markdown", extensions: ["md"] }],
  });

  if (canceled || !filePath) {
    return false;
  }

  const { name: filename, dir: parentDir } = path.parse(filePath);
  console.log(parentDir, path.normalize(getRootDir()));

  if (parentDir !== path.normalize(getRootDir())) {
    await dialog.showMessageBox({
      type: "error",
      title: "Creation failed",
      message: `Cannot create a new note in a different directory - Use ${getRootDir()} directory instead`,
    });

    return false;
  } else {
    await writeFile(filePath, "", { encoding: FILE_ENCODING });
    return filename;
  }
};


export const deleteNote:DeleteNote = async (fileName: string) => {

    const {response} = await dialog.showMessageBox({
        type: 'warning',
        buttons: ['Delete', 'No'],
        title: 'Delete Note',
        message: `Are you sure you want to delete this ${fileName} note?`,
        defaultId: 1,
        cancelId: 1,
    });

    if(response === 1){
        return false
    }
    else {
        await remove(`${getRootDir()}/${fileName}.md`);
        return true
    }


}