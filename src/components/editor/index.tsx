import { Panel } from 'rsuite'

import './style.css'

const style = {
  editor: 'editor',
  editorWrapper: 'editorWrapper',
}

export function Editor() {
  return (
    <div className={style.editorWrapper}>
      <Panel className={style.editor} shaded></Panel>
    </div>
  )
}
