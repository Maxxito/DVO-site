import React, { useState } from 'react';
import { withLayout } from "../../layout/Layout";
import styles from "./Form.module.scss"
import { useTranslation, Trans } from 'react-i18next';

const Form=() => {

   const [data, setData] = useState({
    name: "",
    city: "",
    subject: "",
    mass: "",
    supervisors: "",
    participants: "",
    escort: "",
    arrive: "",
    depart: "",
    festpack: "",
    mainsupervisor: "",
    supervisor_phone: "",
    supervisor_email: "",
    accompanist: "",
    choirmaster: "",
    choreographer: "",
  });

  const {
    name,
    city,
    subject,
    mass,
    supervisors,
    participants,
    escort,
    arrive,
    depart,
    festpack,
    mainsupervisor,
    supervisor_phone,
    supervisor_email,
    accompanist,
    choirmaster,
    choreographer,
  } = data;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure no fields are empty or undefined
    const formattedData = {
      name: name || "N/A",
      city: city || "N/A",
      subject: subject || "N/A",
      mass: mass || "N/A",
      supervisors: supervisors || "N/A",
      participants: participants || "N/A",
      escort: escort || "N/A",
      arrive: arrive || "N/A",
      depart: depart || "N/A",
      festpack: festpack || "N/A",
      mainsupervisor: mainsupervisor || "N/A",
      supervisor_phone: supervisor_phone || "N/A",
      supervisor_email: supervisor_email || "N/A",
      accompanist: accompanist || "N/A",
      choirmaster: choirmaster || "N/A",
      choreographer: choreographer || "N/A",
    };

    // Standardize date format
    const currentDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

    // Prepare the data for the API
    const requestBody = [
      [
        formattedData.name,
        formattedData.city,
        formattedData.subject,
        formattedData.mass,
        formattedData.supervisors,
        formattedData.participants,
        formattedData.escort,
        formattedData.arrive,
        formattedData.depart,
        formattedData.festpack,
        formattedData.mainsupervisor,
        formattedData.supervisor_phone,
        formattedData.supervisor_email,
        formattedData.accompanist,
        formattedData.choirmaster,
        formattedData.choreographer,
        currentDate, // Standardized date format
      ],
    ];

    // Log the data for debugging
    console.log("Data being sent:", requestBody);

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/maxxxito/google_sheets/zruJZapmbDYVThKT?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const result = await response.json();
      console.log("API Response:", result);

      // Reset the form
      setData({
        name: "",
        city: "",
        subject: "",
        mass: "",
        supervisors: "",
        participants: "",
        escort: "",
        arrive: "",
        depart: "",
        festpack: "",
        mainsupervisor: "",
        supervisor_phone: "",
        supervisor_email: "",
        accompanist: "",
        choirmaster: "",
        choreographer: "",
      });
    } catch (err) {
      console.error("Error:", err);
    }
  };



  return (
    <Trans i18nKey={'form'}>
      <form onSubmit={handleSubmit} className={styles.Form}>
        <div className={styles.inputContainer}>
          <h3>Название коллектива</h3>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder=" "
          />
          <span>Академический хор ДВФУ</span>
        </div>

        <div className={styles.inputContainer}>
          <h3>Город</h3>
          <input type="text" name="city" value={city} onChange={handleChange} placeholder=" "/>
          <span>Владивосток</span>
        </div>
        
        <div className={styles.inputContainer}>
          <h3>Субъект РФ</h3>
          <input type="text" name="subject" value={subject} onChange={handleChange} placeholder=" "/>
          <span>Приморский край</span>
        </div>
        
        <div className={styles.inputContainer}>
          <h3>Общее количество участников</h3>
          <input type="number" name="mass" value={mass} onChange={handleChange} placeholder=" "/>
          <span>130 человек</span>
        </div>
        
        <div className={styles.inputContainer}>
          <h3>Из них</h3>
          <input type="number" name="supervisors" value={supervisors} onChange={handleChange} placeholder=" "/>
          <span>Руководителей</span>
        </div>
        <div className={styles.inputContainer}>
          <input type="number" name="participants" value={participants} onChange={handleChange} placeholder=" "/>
          <span>Участников</span>
        </div>
        <div className={styles.inputContainer}>
          <input type="number" name="escort" value={escort} onChange={handleChange} placeholder=" "/>
          <span>Сопровождающих</span>
        </div>
        <div className={styles.inputContainer}>
          <h3>Срок пребывания</h3>
          <h4>Для иногородних коллективов</h4>
          <input type="date" name="arrive" value={arrive} onChange={handleChange} placeholder=" "/>
          <span>дата прибытия</span>
        </div>
        <div className={styles.inputContainer}>
          <input type="date" name="depart" value={depart} onChange={handleChange} placeholder=" "/>
          <span>дата отправления</span>
        </div>
        <div className={styles.inputContainer}>
          <h3>Фестивальный пакет</h3>
          <h4>Коллектив согласен с условиями и хочет приобрести Фестивальные пакеты участника (см. п. 3 Регламента)</h4>
          <input type="radio" name="festpack" value="Да" onChange={handleChange}/>
          <label>Да</label><br></br>
          <input type="radio" name="festpack" value="Нет" onChange={handleChange}/>
          <label>Нет</label>
        </div>
        <div className={styles.inputContainer}>
          <h3>Руководитель</h3>
          <input type="text" name="mainsupervisor" value={mainsupervisor} onChange={handleChange} placeholder=" "/>
          <span>ФИО полностью</span>
        </div>
        <div className={styles.inputContainer}>
          <h3>Контактные данные</h3>
          <input type="tel" name="supervisor_phone" value={supervisor_phone} onChange={handleChange}/>
          <span>+7926583230</span>
        </div>
        <div className={styles.buttonWrapper}>
          <button type='submit' className={styles.SubmitButton}>Отправить заявку</button>
        </div>
      </form>
    </Trans>
  ) 
}

export default Form;