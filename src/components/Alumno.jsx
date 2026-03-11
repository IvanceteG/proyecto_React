export default function Alumno({ nombre, apellidos, promo, ciclo, esAdmin, onEdit, onDelete, children }) {
  return (
    <div className="alumno-card">
      <div className="alumno-avatar">{children}</div>
      <div className="alumno-info">
        <p className="alumno-nombre">{nombre} {apellidos}</p>
        <p className="alumno-ciclo">{ciclo}</p>
        <p className="alumno-promo">{promo}</p>
      </div>
      {esAdmin && (
        <div className="alumno-actions">
          <button className="btn-edit" onClick={onEdit}>✏️ Editar</button>
          <button className="btn-danger" onClick={onDelete}>🗑️ Eliminar</button>
        </div>
      )}
    </div>
  );
}
