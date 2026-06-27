function YearCard({
  title,
  weight,
  s1,
  setS1,
  s2,
  setS2
}) {
  return (
    <div className="year-card">
      <h2>{title}</h2>

      <p className="weight-text">
        Weight: {weight}
      </p>

      <div className="year-inputs">
        <input
          type="number"
          step="0.01"
          placeholder={`${title} Semester 1 GPA`}
          value={s1}
          onChange={(e) => setS1(e.target.value)}
        />

        <input
          type="number"
          step="0.01"
          placeholder={`${title} Semester 2 GPA`}
          value={s2}
          onChange={(e) => setS2(e.target.value)}
        />
      </div>
    </div>
  );
}

export default YearCard;