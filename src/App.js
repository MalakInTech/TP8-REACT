import FetchData from './FetchData';
import AxiosData from './AxiosData';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>TP React - Consommer une API avec Fetch et Axios</h1>

      <section style={{ marginBottom: '30px' }}>
        <FetchData />
      </section>

      <section>
        <AxiosData />
      </section>
    </div>
  );
}

export default App;
