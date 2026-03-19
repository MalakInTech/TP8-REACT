import { useState, useEffect } from 'react';

function FetchData() {
  const [articles, setArticles] = useState([]);
  const [enChargement, setEnChargement] = useState(true);
  const [erreurMsg, setErreurMsg] = useState(null);

  useEffect(() => {
    const recupererArticles = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!res.ok) {
          throw new Error('Problème lors du chargement');
        }

        const donnees = await res.json();
        setArticles(donnees);
      } catch (e) {
        setErreurMsg(e.message);
      } finally {
        setEnChargement(false);
      }
    };

    recupererArticles();
  }, []);

  if (enChargement) return <p>Chargement des articles...</p>;
  if (erreurMsg) return <p>Erreur détectée : {erreurMsg}</p>;

  return (
    <div>
      <h2>Données récupérées avec fetch</h2>
      <ul>
        {articles.slice(0, 5).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;