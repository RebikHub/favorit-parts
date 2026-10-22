export const Table = ({ items }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название / Производитель</th>
          <th scope="col">Стоимость (цена)</th>
          <th scope="col">Доступный остаток на складе</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({id, title, count, price}, index) => (
          <tr key={id}>
            <th scope="row">{index + 1}</th>
            <td>{title}</td>
            <td>{price}</td>
            <td>{count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
