export const Search = ({ onSearch, errorMessage, isLoading }) => {
  return (
  <div className="form-field">
    <label htmlFor="adornField" className="form-label">Поиск производителей</label>
    <label className="form-control form-adorn">
      <div className="form-adorn-icon" aria-hidden="true">
          {isLoading ?
            <svg class="bi spinner-rotate" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentcolor" stroke-width="2" stroke-linecap="round">
              <path d="M8 1V4"/>
              <path opacity="0.8" d="M3.05 3.05L5.17 5.17"/>
              <path opacity="0.6" d="M4 8L1 8"/>
              <path opacity="0.5" d="M5.17 10.83L3.05 12.95"/>
              <path opacity="0.4" d="M8 12V15"/>
              <path opacity="0.3" d="M10.83 10.83L12.95 12.95"/>
              <path opacity="0.2" d="M15 8L12 8"/>
              <path opacity="0.1" d="M12.95 3.05L10.83 5.17"/>
            </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>}
      </div>
      <input type="search" className="form-ghost" id="adornField" placeholder="Артикул (номер) автозапчасти" onChange={onSearch} />
    </label>
    {errorMessage && <small className="form-text fg-warning">{errorMessage}</small>}
  </div>
  )
}
