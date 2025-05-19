import React from "react";

function SignupForm() {
  function signUp(formData) {
    const data = Object.fromEntries(
      [...formData.entries()].filter(([key]) => key !== "dietary-restrictions")
    );
    const dietaryRestrictions = formData.getAll("dietary-restrictions");
    const allData = {
      ...data,
      dietaryRestrictions,
    };
    console.log(allData);
    // console.log(
    //   "Form Data",
    //   formData.get("email"),
    //   formData.get("password"),
    //   formData.get("employmentStatus"),
    //   formData.getAll("dietary-restrictions"),
    //   formData.get("favColor")
    // );
  }
  return (
    <section className="form-container">
      <h1>SignupForm</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="jhon@example.com"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          defaultValue="password123"
          placeholder="Enter your password"
        />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          defaultValue="Please add any relevant information here"
        ></textarea>
        <fieldset>
          <legend>Employment Status:</legend>
          <label htmlFor="employmentStatus">
            <input
              type="radio"
              name="employmentStatus"
              id="employmentStatus"
              value="full-time"
              defaultChecked={true}
            />
            Full Time
          </label>
          <label htmlFor="employmentStatus">
            <input
              type="radio"
              name="employmentStatus"
              id="employmentStatus"
              value="part-time"
            />
            Part Time
          </label>
          <label htmlFor="employmentStatus">
            <input
              type="radio"
              name="employmentStatus"
              id="employmentStatus"
              value="unemployed"
            />
            Un Employed
          </label>
        </fieldset>
        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label htmlFor="dietary-restrictions">
            <input
              type="checkbox"
              name="dietary-restrictions"
              id="dietary-restrictions"
              value="kosher"
              defaultChecked={true}
            />
            Kosher
          </label>
          <label htmlFor="dietary-restrictions">
            <input
              type="checkbox"
              name="dietary-restrictions"
              id="dietary-restrictions"
              value="vegan"
            />
            Vegan
          </label>
          <label htmlFor="dietary-restrictions">
            <input
              type="checkbox"
              name="dietary-restrictions"
              id="dietary-restrictions"
              value="gluten-free"
            />
            Gluten-free
          </label>
        </fieldset>
        <label htmlFor="favColor">What is your favorite color?</label>
        <select name="favColor" id="favColor" defaultValue="">
          <option value="" disabled>
            --Choose a color--
          </option>
          <option value="violet">Violet</option>
          <option value="indigo">Indigo</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Organe</option>
          <option value="red">Red</option>
          <option value="purple">Purple</option>
        </select>

        <button id="submit-btn">Submit</button>
      </form>
    </section>
  );
}

export default SignupForm;
