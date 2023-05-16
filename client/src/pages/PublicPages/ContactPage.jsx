import Button from "../../components/Button";

import { useState } from "react";

export const ContactPage = () => {

  const [contactDetails, setContactDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className='flex justify-center'>
      <form onSubmit={handleSubmit} className="leading-10 flex flex-col mx-20 shadow-md p-3 max-w-lg w-full">

        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstName"
          placeholder="Your name.."
          value={contactDetails.firstName}
          onChange={handleChange}
          className="p-2"
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastName"
          placeholder="Your last name.."
          value={contactDetails.lastName}
          onChange={handleChange}
          className="p-2"
        />

        <label htmlFor="email">Last Name</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
          value={contactDetails.email}
          onChange={handleChange}
          className="p-2"
        />

        <Button className='my-5' success type="submit">Submit</Button>
      </form>
    </section>
  )
}