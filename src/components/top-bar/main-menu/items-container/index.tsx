import { EditorContainer } from './editor-container'
import { FileContainer } from './file-container'
import './style.css'

interface ItemsContainerProps {
  activeKey: string
}

const styles = {
  itemsContainer: 'itemsContainer',
  menuToolbar: 'menuToolbar',
}

export function ItemsContainer({ activeKey }: ItemsContainerProps) {
  if (activeKey === 'editor')
    return (
      <div className={styles.itemsContainer}>
        <EditorContainer />
      </div>
    )
  else if (activeKey === 'file')
    return (
      <div className={styles.itemsContainer}>
        <FileContainer />
      </div>
    )
  return <div className={styles.itemsContainer}></div>
}
