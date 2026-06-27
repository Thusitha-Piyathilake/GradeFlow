import { useState } from "react";
import PredictorHero from "../components/PredictorHero";
import YearCard from "../components/YearCard";
import GpaSummary from "../components/GpaSummary";
import DegreeResultCard from "../components/DegreeResultCard";
import WeightedFormula from "../components/WeightedFormula";

import "../App.css";

function DegreePredictor() {
  const [y2s1, setY2S1] = useState("");
  const [y2s2, setY2S2] = useState("");

  const [y3s1, setY3S1] = useState("");
  const [y3s2, setY3S2] = useState("");

  const [y4s1, setY4S1] = useState("");
  const [y4s2, setY4S2] = useState("");

  const [year2Gpa, setYear2Gpa] = useState(0);
  const [year3Gpa, setYear3Gpa] = useState(0);
  const [year4Gpa, setYear4Gpa] = useState(0);

  const [weightedGpa, setWeightedGpa] = useState(0);
  const [degreeClass, setDegreeClass] = useState("");

  const calculateDegree = () => {
    const year2 =
      (Number(y2s1 || 0) + Number(y2s2 || 0)) / 2;

    const year3 =
      (Number(y3s1 || 0) + Number(y3s2 || 0)) / 2;

    const year4 =
      (Number(y4s1 || 0) + Number(y4s2 || 0)) / 2;

    setYear2Gpa(year2.toFixed(2));
    setYear3Gpa(year3.toFixed(2));
    setYear4Gpa(year4.toFixed(2));

    const final =
      year2 * 0.20 +
      year3 * 0.30 +
      year4 * 0.50;

    setWeightedGpa(final.toFixed(2));

    if (final >= 3.7) {
      setDegreeClass("🏆 First Class Honours");
    } else if (final >= 3.3) {
      setDegreeClass("🥈 Second Upper Class Honours");
    } else if (final >= 3.0) {
      setDegreeClass("🥉 Second Lower Class Honours");
    } else if (final >= 2.0) {
      setDegreeClass("🎓 General Degree");
    } else {
      setDegreeClass("❌ No Class");
    }
  };

  return (
    <div className="predictor-container">
      <PredictorHero />

      <div className="predictor-grid">
        <YearCard
          title="Year 2"
          weight="20%"
          s1={y2s1}
          setS1={setY2S1}
          s2={y2s2}
          setS2={setY2S2}
        />

        <YearCard
          title="Year 3"
          weight="30%"
          s1={y3s1}
          setS1={setY3S1}
          s2={y3s2}
          setS2={setY3S2}
        />

        <YearCard
          title="Year 4"
          weight="50%"
          s1={y4s1}
          setS1={setY4S1}
          s2={y4s2}
          setS2={setY4S2}
        />
      </div>

      <button
        className="calculate-btn"
        onClick={calculateDegree}
      >
        Calculate Degree Class
      </button>

      <GpaSummary
        year2Gpa={year2Gpa}
        year3Gpa={year3Gpa}
        year4Gpa={year4Gpa}
        weightedGpa={weightedGpa}
      />

      <DegreeResultCard
        degreeClass={degreeClass}
        weightedGpa={weightedGpa}
      />

      <WeightedFormula />
    </div>
  );
}

export default DegreePredictor;