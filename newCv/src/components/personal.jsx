import { useState } from "react";


 function PersonalInfo({name, setName, job, setJob, email, setEmail, phone, setPhone, city, setCity}){

  function handleNameChange(e) {
        setName(e.target.value);
    }
  function handleJobChange(e) {
        setJob(e.target.value);
    }
  function handleEmailChange(e) {
        setEmail(e.target.value);
    }
  function handlePhoneChange(e) {
        setPhone(e.target.value);
    }
  function handleCityChange(e) {
        setCity(e.target.value);
    }
 
  return (
    <>
      <label>
    Full Name
    <input
      type="text"
      value={name}
      onChange={handleNameChange}
    />
  </label>

  <label>
    Job Title
    <input
      type="text"
      value={job}
      onChange={handleJobChange}
    />
  </label>

  <label>
    Email
    <input
      type="email"
      value={email}
      onChange={handleEmailChange}
    />
  </label>

  <label>
    Phone
    <input
      type="tel"
      value={phone}
      onChange={handlePhoneChange}
    />
  </label>

  <label>
    City
    <input
      type="text"
      value={city}
      onChange={handleCityChange}
    />
  </label>
    </>
  );
}

export { PersonalInfo };