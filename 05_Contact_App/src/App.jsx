import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { collection, onSnapshot } from "firebase/firestore";
import ContactCard from "./components/ContactCard";
import { db } from "./config/firebase";
import { getDocs } from "firebase/firestore";
import Modal from "./components/Modal";
import AddandUpdateContact from "./components/AddandUpdateContact";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import NotFoundContact from "./components/NotFoundContact";


const App = () => {
  const [contacts, setContacts] = useState([]);
  const {isOpen, onClose, onOpen} = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {

        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef,(snapshot)=>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
          setContacts(contactLists);
          return contactLists
        })

        
        // console.log(contactLists);

        
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };

  return (
    <>
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex gap-3">
        <div className="flex relative flex-grow items-center">
          <FaSearch className="text-white text-3xl absolute ml-1" />
          <input
          onChange={filterContacts}
            type="text"
            className="border bg-transparent border-white rounded h-10 flex-grow text-white pl-9"
          />
          <div>
            <CiCirclePlus onClick={onOpen} className="text-5xl text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-4 gap-3 flex flex-col">
        {contacts.length<= 0? <NotFoundContact/> : contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
    <AddandUpdateContact
    onClose={onClose}
    isOpen={isOpen}/>
    <ToastContainer
    position="bottom-center"
    />
    </>
  );
};

export default App;
