function DegreeResultCard({
  degreeClass,
  weightedGpa
}) {
  return (
    <div className="result-card">
      <h2>Predicted Degree Class</h2>

      <h1>{degreeClass}</h1>

      <h3>Final GPA: {weightedGpa}</h3>
    </div>
  );
}

export default DegreeResultCard;