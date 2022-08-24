export default function AvatarInputs() {
  return (
    <>
      <input
        type="url"
        required
        className="popup__field popup__field_type_edit-avatar"
        placeholder="Ссылка на картинку"
        name="avatar"
      />
      <p className="avatar-error popup__input-error popup__input-error_type_edit-avatar"></p>
    </>
  )
}
