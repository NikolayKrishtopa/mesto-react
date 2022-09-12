import { useEffect, useState } from 'react'
import PopupWithForm from './PopupWithForm'
import Input from './Input'

export default function EditAvatarPopup(props) {
  const { isOpen, onClose, isSaving, onEditAvatar } = props
  const [avatarLink, setAvatarLink] = useState('')
  function handleEditAvatar(e) {
    e.preventDefault()
    onEditAvatar(avatarLink)
  }

  useEffect(() => {
    setAvatarLink('')
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
      <Input
        type="url"
        placeholder="Ссылка на картинку"
        value={avatarLink}
        onChange={setAvatarLink}
      />
    </PopupWithForm>
  )
}
