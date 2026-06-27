function SubjectTable({
  subjects,
  editSubject,
  deleteSubject
}) {
  return (
    <table className="subjects-table">
      <thead>
        <tr>
          <th>Subject</th>
          <th>Credits</th>
          <th>Grade</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {subjects.map((subject) => (
          <tr key={subject.id}>
            <td>{subject.name}</td>
            <td>{subject.credits}</td>
            <td>{subject.grade}</td>

            <td>
              <button
                onClick={() => editSubject(subject)}
              >
                Edit
              </button>

              <button
                onClick={() => deleteSubject(subject.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SubjectTable;