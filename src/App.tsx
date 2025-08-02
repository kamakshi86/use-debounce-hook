import { useState } from 'react';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  return (
    <div style={{ padding: 20 }}>
      <h2>Debounced Input</h2>
      <input
        type="text"
        placeholder="Type here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Debounced Value: {debouncedSearch}</p>
    </div>
  );
}

export default App;