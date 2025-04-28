import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { LuMessageSquareText } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";


import React from "react";

function ContactForm() {

  // const onViaCallSubmit = ()=>{
  //   console.log("I am from call.");
  // }

  const onSubmit = (event)=>{
    event.preventDefault()
    // console.log(event);
  }


  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<LuMessageSquareText fontSize="24px" />}
          />
          <Button 
          // onClick = {onViaCallSubmit} // For this property to work, it has to be passed on "Button component"
          text="VIA CALL" icon={<IoCallOutline fontSize="24px" />} />
          
        </div>
        <Button isOutline = {true}
        text="VIA EMAIL FORM" icon={<GoMail fontSize="24px" />} />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text"/>
          </div>
          <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email"/>
          </div>
          <div className={styles.form_control}>
          <label htmlFor="text">Enter your message</label>
          <textarea type="text"rows={10}/>
          </div>
        
        <div style={
          {
            display: "flex",
            justifyContent: "end"
          }
        }>
          <Button
            text="SUBMIT"
        />
        </div>
        </form>
      </div>
      <div className={styles.contact_Image}>
        <img src="/images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactForm;
