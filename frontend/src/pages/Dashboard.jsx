import { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import AddSubjectCard from "../components/AddSubjectCard";
import SummaryCard from "../components/SummaryCard";
import "../App.css";

const API_URL = "https://gradeflow-production-6f7e.up.railway.app";

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
    const response = await axios.get(`${API_URL}/subjects`);
    setSubjects(response.data);
  };

  const fetchGpa = async () => {
    const response = await axios.get(`${API_URL}/gpa`);
    setGpa(response.data.gpa);
  };

  const addOrUpdateSubject = async () => {
    if (editingId === null) {
      await axios.post(`${API_URL}/subjects`, {
        name,
        credits: Number(credits),
        grade,
      });
    } else {
      await axios.put(`${API_URL}/subjects/${editingId}`, {
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
    await axios.delete(`${API_URL}/subjects/${id}`);

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