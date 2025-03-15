import React, { useState } from 'react';
import styles from '../Gallery/Gallery.module.scss';



const BasicForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Form submitted:', formData); // Log form data to the console
    alert(`Name: ${formData.name}, Email: ${formData.email}`); // Show form data in an alert
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.breadcumb}>
                    <a href='/' className={styles.notActive}>Главная</a> / <span className={styles.active}>Галерея</span>
                </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;