import { useRef, useEffect } from 'react'
import PopupWithForm from './PopupWithForm'
import AvatarInputs from './AvatarInputs'

export default function EditAvatarPopup(props) {
  const { isOpen, onClose, isSaving, onEditAvatar } = props
  const avatarLinkRef = useRef()
  function handleEditAvatar(e) {
    e.preventDefault()
    onEditAvatar(avatarLinkRef.current.value)
  }

  useEffect(() => {
    avatarLinkRef.current.value = ''
  }, [isOpen])

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      isSaving={isSaving}
      onSubmit={handleEditAvatar}
    >
      <AvatarInputs avatarLinkRef={avatarLinkRef} />
    </PopupWithForm>
  )
}
