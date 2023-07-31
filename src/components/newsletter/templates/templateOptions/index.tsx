import { IconButton, Tooltip } from '@mui/material'
import { ArrowDown2, ArrowUp2, Danger, Edit, Trash } from 'iconsax-react'
import styles from './templateOptions.module.css'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import {
  deleteNewsById,
  setOrdererNews,
  setTemplateIdEditing
} from '@/store/slices/newsletter'
import { colors } from '@/styles/variables'

interface TemplateStatusIconProps {
  status: 'incomplete' | 'complete'
  from?: string
  id: string
}

const TemplateStatusIcon = ({
  status,
  from = '',
  id
}: TemplateStatusIconProps) => {
  const dispatch = useDispatch()
  const handleClickEdit = (id: string) => {
    dispatch(setTemplateIdEditing(id))
  }

  switch (status) {
    case 'incomplete':
      return from !== 'header' ? (
        <Tooltip title="Template incompleto" placement="left">
          <IconButton
            size="small"
            id={id}
            // onClick={e => handleClickEdit(e.currentTarget.id)}
          >
            <Danger size="20" color={colors.warning} variant="Bold" />
          </IconButton>
        </Tooltip>
      ) : null
    case 'complete':
      return (
        <Tooltip title="Editar template" placement="left">
          <IconButton
            size="small"
            id={id}
            onClick={e => handleClickEdit(e.currentTarget.id)}
          >
            <Edit size="20" color={colors.primary_blue} />
          </IconButton>
        </Tooltip>
      )
    default:
      return null
  }
}

interface TemplatesOptionsProps {
  children: React.ReactNode
  from?: string
  id: string
}

const TemplatesOptions = ({
  children,
  from = '',
  id
}: TemplatesOptionsProps) => {
  const dispatch = useDispatch()
  const options = useRef<HTMLDivElement>(null)

  const { templateIdEditing } = useSelector(
    (state: RootState) => state.newsletter
  )

  const handleMouseLeave = () => {
    options.current?.classList.remove(styles.show)
  }
  const handleMouseEnter = () => {
    options.current?.classList.add(styles.show)
  }

  const handleClickDelete = (id: string) => {
    dispatch(deleteNewsById(id))
  }
  const handleClickMove = (id: string, direction: string) => {
    dispatch(setOrdererNews({ id, direction }))
  }
  return (
    <div
      className={styles.content}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      id={id}
    >
      <div
        className={
          templateIdEditing !== id.toString()
            ? styles.overlay
            : styles.nooverlay
        }
      >
        {children}
      </div>
      <div className={styles.options} ref={options}>
        <div>
          <TemplateStatusIcon status="complete" from={from} id={id} />
        </div>
        {from !== 'header' && (
          <>
            <div>
              <Tooltip title="Eliminar" placement="left">
                <IconButton
                  size="small"
                  id={id}
                  onClick={e => handleClickDelete(e.currentTarget.id)}
                >
                  <Trash size={20} color={colors.error} />
                </IconButton>
              </Tooltip>
            </div>
            <div>
              <Tooltip title="subir" placement="left">
                <IconButton
                  size="small"
                  id={id}
                  onClick={e => handleClickMove(e.currentTarget.id, 'up')}
                >
                  <ArrowUp2 size={20} color={colors.success} />
                </IconButton>
              </Tooltip>
            </div>
            <div>
              <Tooltip title="bajar" placement="left">
                <IconButton
                  size="small"
                  id={id}
                  onClick={e => handleClickMove(e.currentTarget.id, 'down')}
                >
                  <ArrowDown2 size={20} color={colors.success} />
                </IconButton>
              </Tooltip>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default TemplatesOptions
