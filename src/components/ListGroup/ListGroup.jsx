export const ListGroup = ({items, onChange, activeId}) => {
  return (
    <div className="list-group">
      {items.map(({ title, id }) => (
        <button key={id} type="button" className={`list-group-item list-group-item-action ${activeId && id && activeId === id ? 'active' : ''}`} onClick={() => onChange(id)}>
          {title}
        </button>
      ))}
    </div>
  )
}
