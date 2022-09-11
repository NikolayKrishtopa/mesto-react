export default function AvatarInputs(props) {
  const { avatarLinkRef } = props
  return (
    <>
      <input
        ref={avatarLinkRef}
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
