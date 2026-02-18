"use client";
import React from "react";
import "./style.css";

type Contact = {
  name: string;
  role: string;
  about: string;
  link: string;
  img: string;
};

type contactsProps = { contacts: Contact[]; };

const RenderContacts: React.FC<contactsProps> = ({ contacts }) => {
  return (
    <div className="courses-container">
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <img src={contact.img} alt={contact.name} className="contact-img" />
          <div className="contact-info">
            <h3 className="contact-name font-bold">{contact.name}</h3>
            <p className="contact-role text-blue-300">{contact.role}</p>
            <p className="contact-about">{contact.about}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default RenderContacts;
