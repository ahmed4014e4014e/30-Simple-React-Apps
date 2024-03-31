/* eslint-disable no-unused-vars */
import React from 'react'
import Contact from "./Contact"

export default function ContactsList( { contacts } ) {
  const generateRandomImg = () => {
    const types = [
      "adventurer",
      "croodles",
      "identicon",
      "initials",
      "bottts",
      "avataaars",
      "micah",
    ];
    return types[Math.floor(Math.random() * types.length)];
  };

  return (
    <ul>
      {contacts.map((contact, id)=>{
        return (
          <Contact key={id} icon={`https://api.dicebear.com/7.x/${generateRandomImg()}/svg
          `}
            firstName={contact.first_name}
            lastName={contact.last_name}
            phoneNr={contact.phone}
          />
        )
      })}    
    </ul>
  )
}
