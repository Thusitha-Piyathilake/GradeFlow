function GpaSummary({
  year2Gpa,
  year3Gpa,
  year4Gpa,
  weightedGpa
}) {
  return (
    <div className="summary-card">
      <h2>GPA Summary</h2>

      <div className="summary-grid">
        <div className="summary-item">
          <h3>Year 2</h3>
          <h1>{year2Gpa}</h1>
        </div>

        <div className="summary-item">
          <h3>Year 3</h3>
          <h1>{year3Gpa}</h1>
        </div>

        <div className="summary-item">
          <h3>Year 4</h3>
          <h1>{year4Gpa}</h1>
        </div>

        <div className="summary-item">
          <h3>Weighted GPA</h3>
          <h1>{weightedGpa}</h1>
        </div>
      </div>
    </div>
  );
}

export default GpaSummary;