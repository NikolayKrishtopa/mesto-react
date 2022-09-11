import PopupWithForm from './PopupWithForm'
import AvatarInputs from './AvatarInputs'

export default function EditAvatarPopup(props) {
  const { isOpen, onClose, isSaving } = props
  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      isSaving={isSaving}
    >
      <AvatarInputs />
    </PopupWithForm>
  )
}
