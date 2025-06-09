import { useState } from "react";

//in react you have to use UseState for forms and defining variables that are going to change essentially

function ProfessionalInfo({ onSubmitData }) {
  const [jobTitle, setJobTitle] = useState('');
  const [employer, setEmployer] = useState('');
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = {
      jobTitle,
      employer,
      city,
      startDate,
      endDate,
      description
    };

    if (onSubmitData) { //this just checks to make there is a function passed into the props 
      onSubmitData(result);
    }

  setJobTitle('');
  setEmployer('');
  setCity('');
  setStartDate('');
  setEndDate('');
  setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Job Title
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </label>

      <label>
        Employer
        <input
          type="text"
          value={employer}
          onChange={(e) => setEmployer(e.target.value)}
        />
      </label>

      <label>
        City
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>

      <label>
        Start Date
        <input
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>

      <label>
        End Date
        <input
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>

      <label>
        Description
        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button type="submit">Save</button>
    </form>
  );
}

export default ProfessionalInfo;
