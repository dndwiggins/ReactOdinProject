function Education({ school, setSchool, title, setTitle, startD, setStartD, endD, setEndD }) {
  
  function handleSchoolChange(e) {
    setSchool(e.target.value);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleStartDChange(e) {
    setStartD(e.target.value);
  }

  function handleEndDChange(e) {
    setEndD(e.target.value);
  }

  return (
    <>
      <label>
        School Name
        <input
          type="text"
          value={school}
          onChange={handleSchoolChange}
        />
      </label>

      <label>
        Title of Study
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
      </label>

      <label>
        Start Date
        <input
          type="text"
          value={startD}
          onChange={handleStartDChange}
        />
      </label>

      <label>
        End Date
        <input
          type="text"
          value={endD}
          onChange={handleEndDChange}
        />
      </label>
    </>
  );
}

export {Education};
