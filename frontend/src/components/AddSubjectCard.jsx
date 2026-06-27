function AddSubjectCard({
  name,
  setName,
  credits,
  setCredits,
  grade,
  setGrade,
  addOrUpdateSubject,
  editingId
}) {
  return (
    <div className="card">
      <h2>
        {editingId ? "Edit Subject" : "Add Subject"}
      </h2>

      <div className="form-grid">
        <input
          placeholder="Subject Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Credits"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
        />

        <select
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option value="">Select Grade</option>

          <option value="A+">A+</option>
          <option value="A">A</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B">B</option>
          <option value="B-">B-</option>
          <option value="C+">C+</option>
          <option value="C">C</option>
          <option value="C-">C-</option>
          <option value="D+">D+</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>

        <button
          className="add-btn"
          onClick={addOrUpdateSubject}
        >
          {editingId ? "Update Subject" : "Add Subject"}
        </button>
      </div>
    </div>
  );
}

export default AddSubjectCard;