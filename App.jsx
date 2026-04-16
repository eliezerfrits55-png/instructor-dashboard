

import NavBar from './composent/NavBar';
import UserCard from './composent/UserCard';

/**
 *  Réponses aux questions :
 * 
 * 1. on utilise  React parce que,
 *    Les composants permettent de diviser l'interface en morceaux indépendants
 *    et réutilisables et cela favorise la réutilisabilité du code.
 * 
 * 2.  la différence entre HTML et JSX est :
 *    - JSX est une syntaxe qui ressemble à HTML mais fonctionne dans JavaScript
 *    - JSX permet d'intégrer des expressions JavaScript avec { }
 *    - Les attributs HTML utilisent le kebab-case (class-name) tandis que JSX
 *      utilise le camelCase (className)
 *    - JSX doit avoir un seul élément parent (ou utiliser Fragment <>)
 *    - Les balises auto-fermantes doivent se terminer par /> en JSX
 * 
 * 3. Pourquoi séparer une application en plusieurs fichiers ?
 *    - Meilleure organisation et lisibilité du code
 *    - Facilite le travail en équipe 
 *    - Réutilisabilité des composants dans différentes parties de l'app
 *    - Maintenance simplifiée : modifier un composant n'affecte pas les autres
 */

function App() {
  
  const instructors = [
    {
      id: 1,
      name: 'Marie Dupont',
      role: 'Senior Instructor',
      status: 'Active',
      startYear: 2018
    },
    {
      id: 2,
      name: 'Jean Martin',
      role: 'Assistant Instructor',
      status: 'Inactive',
      startYear: 2020
    },
    {
      id: 3,
      name: 'Sophie Bernard',
      role: 'Lead Instructor',
      status: 'Active',
      startYear: 2015
    }
  ];

  return (
    <>
      {/* Utilisation du Fragment <> pour éviter les div inutiles (Bonus) */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <NavBar />
        
        <h1 style={{ color: '#1f2937', borderBottom: '2px solid #3b82f6', paddingBottom: '10px' }}>
          Instructor Dashboard
        </h1>
        
        <div style={{ marginTop: '20px' }}>
          <h2 style={{ color: '#4b5563' }}>Équipe Pédagogique</h2>
          
          {/* Affichage dynamique avec au moins 2 UserCard (Exigence) */}
          {instructors.map((instructor) => (
            <UserCard
              key={instructor.id}
              name={instructor.name}
              role={instructor.role}
              status={instructor.status}
              startYear={instructor.startYear}
            />
          ))}
        </div>
        
        <footer style={{ marginTop: '30px', padding: '20px', textAlign: 'center', color: '#9ca3af' }}>
          <p>© 2026 Localhost Academy - Formation Full-Stack JS</p>
        </footer>
      </div>
    </>
  );
}

export default App;