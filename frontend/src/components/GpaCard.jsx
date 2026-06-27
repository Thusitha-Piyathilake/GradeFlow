function GpaCard({ gpa }) {
  return (
    <div className="gpa-card">
      <h2>Cumulative GPA</h2>

      <h1>{gpa}</h1>

      {gpa >= 3.7 && (
        <p>🏆 Dean's List</p>
      )}
    </div>
  );
}

export default GpaCard;