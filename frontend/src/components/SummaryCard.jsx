import SubjectTable from "./SubjectTable";
import StatsCards from "./StatsCards";
import GpaCard from "./GpaCard";

function SummaryCard({
  subjects,
  gpa,
  editSubject,
  deleteSubject
}) {
  return (
    <div className="card">
      <h2>Summary</h2>

      <SubjectTable
        subjects={subjects}
        editSubject={editSubject}
        deleteSubject={deleteSubject}
      />

      <StatsCards subjects={subjects} />

      <GpaCard gpa={gpa} />
    </div>
  );
}

export default SummaryCard;