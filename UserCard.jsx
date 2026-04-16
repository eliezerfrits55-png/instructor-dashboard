

/**
 * Composant UserCard - Affiche les informations d'un utilisateur
 */
function UserCard({ name, role, status, startYear }) {
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = startYear ? currentYear - startYear : 0;

  const statusStyle = {
    color: status === 'Active' ? '#22c55e' : '#ef4444',
    fontWeight: 'bold',
    padding: '4px 8px',
    borderRadius: '4px',
    backgroundColor: status === 'Active' ? '#dcfce7' : '#fee2e2',
  };

  return (
    <>
      <div className="user-card" style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '16px',
        margin: '10px 0',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {/* Nom en MAJUSCULE (Exigence JSX) */}
        <h3 style={{ margin: '0 0 8px 0', color: '#1f2937' }}>
          {name.toUpperCase()}
        </h3>
        
        {/* Affichage du rôle */}
        <p style={{ margin: '4px 0', color: '#6b7280' }}>
          <strong>Rôle:</strong> {role}
        </p>
        
        {/* Statut avec condition (Exigence JSX) */}
        <p style={{ margin: '4px 0' }}>
          <strong>Statut:</strong>{' '}
          <span style={statusStyle}>
            {status === 'Active' ? '✅ Active' : '❌ Inactive'}
          </span>
        </p>

        {startYear && (
          <p style={{ margin: '4px 0', color: '#6b7280', fontSize: '0.9em' }}>
            <strong>Expérience:</strong> {yearsOfExperience} ans
          </p>
        )}
      </div>
    </>
  );
}

export default UserCard;