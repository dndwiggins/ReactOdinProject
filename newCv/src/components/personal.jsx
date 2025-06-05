import { useState } from "react";

export default function Input({ label = 'hello', value = 'test'}){

     return (
    <label>
      {label}
      {' '}
      <input
        value={value}
      
      />
    </label>
  );

}

 function PersonalInfo(){
  const [text, setText] = useState('');
  const [active, setActive] = useState(false)

  function handleChange(e) {
    setText(e.target.value);
  }

  const handleClick = () => {
    setActive(true)
  };

  if(!active){
   return( <div>

    <h1 onClick={handleClick}>Personal Information</h1>
    </div>
   );
  }

  return (
    <>
      <Input
        label="Full Name"
        value={text}
        onChange={handleChange}
      />
      <Input
        label="Job Title"
        value={text}
        onChange={handleChange}
      />
       <Input
        label="Email"
        value={text}
        onChange={handleChange}
      />
      <Input
        label="Phone"
        value={text}
        onChange={handleChange}
      /> <Input
        label="City"
        value={text}
        onChange={handleChange}
      />
    </>
  );
}

