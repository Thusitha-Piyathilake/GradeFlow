import { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import AddSubjectCard from "../components/AddSubjectCard";
import SummaryCard from "../components/SummaryCard";
import "../App.css";

function App() {
  const [subjects, setSubjects] = useState([]);
  const [gpa, setGpa] = useState(0);

  const [name, setName] = useState("");
  const [credits, setCredits] = useState("");
  const [grade, setGrade] = useState("");

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchSubjects();
    fetchGpa();
  }, []);

  const fetchSubjects = async () => {
    const response = await axios.get("http://127.0.0.1:5000/subjects");
    setSubjects(response.data);
  };

  const fetchGpa = async () => {
    const response = await axios.get("http://127.0.0.1:5000/gpa");
    setGpa(response.data.gpa);
  };

  const addOrUpdateSubject = async () => {
    if (editingId === null) {
      await axios.post("http://127.0.0.1:5000/subjects", {
        name,
        credits: Number(credits),
        grade,
      });
    } else {
      await axios.put(`http://127.0.0.1:5000/subjects/${editingId}`, {
        name,
        credits: Number(credits),
        grade,
      });

      setEditingId(null);
    }

    setName("");
    setCredits("");
    setGrade("");

    fetchSubjects();
    fetchGpa();
  };

  const deleteSubject = async (id) => {
    await axios.delete(`http://127.0.0.1:5000/subjects/${id}`);

    fetchSubjects();
    fetchGpa();
  };

  const editSubject = (subject) => {
    setName(subject.name);
    setCredits(subject.credits);
    setGrade(subject.grade);
    setEditingId(subject.id);
  };

  return (
  <div className="container">
    <HeroSection />

    <AddSubjectCard
      name={name}
      setName={setName}
      credits={credits}
      setCredits={setCredits}
      grade={grade}
      setGrade={setGrade}
      addOrUpdateSubject={addOrUpdateSubject}
      editingId={editingId}
    />

    <SummaryCard
      subjects={subjects}
      gpa={gpa}
      editSubject={editSubject}
      deleteSubject={deleteSubject}
    />
  </div>
);
}

export default App;