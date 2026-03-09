import './Filters.css'

export default function Filters({ search, setSearch, languages, selectedLang, setSelectedLang }) {
  return (
    <div className="filters">
      <input
        type="search"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="filter-search"
        aria-label="Search projects"
      />
      <select
        value={selectedLang}
        onChange={(e) => setSelectedLang(e.target.value)}
        className="filter-lang"
        aria-label="Filter by language"
      >
        <option value="">All languages</option>
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  )
}
