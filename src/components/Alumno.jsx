export default function Alumno({ nombre, apellidos, promo, ciclo, esAdmin, onEdit, onDelete, children }) {
  return (
    <div className="alumno-card">
      {esAdmin && (
        <div className="alumno-actions">
          <button className="btn-edit" onClick={onEdit}>✏️</button>
          <button className="btn-danger" onClick={onDelete}>🗑️</button>
        </div>
      )}
      <div className="alumno-avatar">{children}</div>
      <div className="alumno-info">
        <p className="alumno-nombre">{nombre} {apellidos}</p>
        <p className="alumno-ciclo">{ciclo}</p>
        <p className="alumno-promo">{promo}</p>
      </div>
    </div>
  );
}
