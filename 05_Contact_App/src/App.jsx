import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { collection } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { db } from "./config/firebase";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  return (
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
            <CiCirclePlus className="text-5xl text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div>
        {contacts.map((contact) => {
          <div key={contact.id}>
            <HiOutlineUserCircle />
            <div className="">
              <h2 className="">{contact.name}</h2>
              <p className=""></p>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default App;
