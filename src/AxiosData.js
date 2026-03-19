import { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosData() {
  const [listeUsers, setListeUsers] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const chargerUsers = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setListeUsers(response.data);
      } catch (err) {
        setErreur(err.message);
      } finally {
        setChargement(false);
      }
    };

    chargerUsers();
  }, []);

  if (chargement) return <p>Chargement des utilisateurs...</p>;
  if (erreur) return <p>Erreur : {erreur}</p>;

  return (
    <div>
      <h2>Liste des utilisateurs (axios)</h2>
      <ul>
        {listeUsers.map((user) => (
          <li key={user.id}>
            {user.name} | {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosData;