import { useState, useEffect } from 'react';

const Usuario = () => {
        const [userData, setUserData] = useState(null);
        const [error, setError] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch('http://127.0.0.1:1357/clientes');
              const data = await response.json();
              setUserData(data);
              console.log(data);
            } catch (error) {
              setError(error);
            } finally {
              setIsLoading(false);
            }
          };
      
          fetchData();
        }, []);
      
        if (isLoading) {
          return <p>Cargando...</p>;
        }
      
        if (error) {
          return <p>Error: {error.message}</p>;
        }
      
        return (
          <div>
            {/* Renderiza la información del usuario */}
            <h1>{userData.nombre}</h1>
          </div>
        );
      };

export default Usuario;