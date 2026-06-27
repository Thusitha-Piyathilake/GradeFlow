function StatsCards({ subjects }) {
  const totalCredits = subjects.reduce(
    (sum, subject) => sum + subject.credits,
    0
  );

  return (
    <div className="stats-container">
      <div className="stat-card">
        <h3>Total Subjects</h3>
        <p>{subjects.length}</p>
      </div>

      <div className="stat-card">
        <h3>Total Credits</h3>
        <p>{totalCredits}</p>
      </div>
    </div>
  );
}

export default StatsCards;