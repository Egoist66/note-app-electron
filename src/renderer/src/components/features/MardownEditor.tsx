import {
  BoldItalicUnderlineToggles,
  Button,
  CreateLink,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  ListsToggle,
  markdownShortcutPlugin,
  MDXEditor,
  MDXEditorMethods,
  quotePlugin,
  Separator,
  toolbarPlugin,
  UndoRedo,
} from "@mdxeditor/editor";
import { NoteInfo } from "@shared/models";
import { FC, memo, useEffect, useRef } from "react";

export const MarkDownEditor: FC<{note?: NoteInfo}> = memo(({note}) => {
  const mdxEditorRef = useRef<MDXEditorMethods>(null)
  
  useEffect(() => {
    if(mdxEditorRef.current){
      mdxEditorRef.current.setMarkdown(`# ${note?.content}` || "dd")
    }
  }, [note])


  if(!note) return null


  return (
    
    <>

      <MDXEditor
        ref={mdxEditorRef}
        contentEditableClassName="outline-none 
        min-h-screen max-w-none text-large 
        caret-yellow-500 prose prose-invert
        prose-p:my-3 prose-p:leading-relaxed
        prose-headings:my-4 prose-blockquote:my-4
        prose-ul:my-2 prose-li:my-0 prose-code:px-1
        prose-code:text-red-500 prose-code:before:content-['']
        prose-code:after:content-['']"
        markdown={``}
        plugins={[
          headingsPlugin(),
          linkPlugin(),
          listsPlugin(),
          quotePlugin(),
          linkDialogPlugin(),
          markdownShortcutPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
                <>
                  {' '}
                  <UndoRedo />
                  <BoldItalicUnderlineToggles />
                  <CreateLink />
                  <ListsToggle />
                  <Separator />
                  <Button />
                </>
              )
          })
        ]}
      />
    </>
  );
});
