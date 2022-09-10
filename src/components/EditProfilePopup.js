import { useState, useContext, useEffect } from 'react'
import ProfileInputs from './ProfileInputs'
import PopupWithForm from './PopupWithForm'
import CurrentUserContext from '../contexts.js/CurrentUserContext'

export default function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser } = props
  const currentUser = useContext(CurrentUserContext)
  const [name, setName] = useState(currentUser.name)
  const [about, setAbout] = useState(currentUser.about)

  useEffect(() => {
    setName(currentUser.name)
    setAbout(currentUser.about)
  }, [isOpen])

  function handleSubmit(e) {
    e.preventDefault()
    onUpdateUser({ name, about })
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
    >
      <ProfileInputs
        userName={name}
        userAbout={about}
        onChangeUserName={setName}
        onChangeUserAbout={setAbout}
      />
    </PopupWithForm>
  )
}
