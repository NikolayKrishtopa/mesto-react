import { useState, useContext, useEffect } from 'react'
import PopupWithForm from './PopupWithForm'
import CurrentUserContext from '../contexts.js/CurrentUserContext'
import Input from './Input'

export default function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser, isSaving } = props
  const currentUser = useContext(CurrentUserContext)
  const [userName, setUserName] = useState(currentUser.name)
  const [userAbout, setUserAbout] = useState(currentUser.about)

  useEffect(() => {
    setUserName(currentUser.name)
    setUserAbout(currentUser.about)
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault()
    onUpdateUser({ name: userName, about: userAbout })
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={() => {
        onClose()
      }}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
      isSaving={isSaving}
    >
      <Input
        type="text"
        placeholder="Имя пользователя"
        value={userName ? userName : ''}
        onChange={setUserName}
      />
      <Input
        type="text"
        placeholder="Расскажите о себе"
        value={userAbout ? userAbout : ''}
        onChange={setUserAbout}
      />
    </PopupWithForm>
  )
}
