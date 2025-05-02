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
  return (
    <>
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex gap-3">
        <div className="flex relative flex-grow items-center">
          <FaSearch className="text-white text-3xl absolute ml-1" />
          <input
            type="text"
            className="border bg-transparent border-white rounded h-10 flex-grow text-white pl-9"
          />
          <div>
            <CiCirclePlus onClick={onOpen} className="text-5xl text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-4 gap-3 flex flex-col">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
    <AddandUpdateContact
    onClose={onClose}
    isOpen={isOpen}/>
    </>
  );
};

export default App;
