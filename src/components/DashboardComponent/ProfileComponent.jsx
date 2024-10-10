"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { GetUserById } from '@/helpers/auth.helper';
import Link from 'next/link';
import { UpdateUser } from  '@/helpers/users.helper';

const ProfileComponent = () => {
  const router = useRouter();
  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(null); 

  // Cargar la sesión de usuario desde localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userSession = localStorage.getItem("userSession");

      if (userSession) {
        const parsedData = JSON.parse(userSession);
        setUserSession(parsedData);
      } else {
        router.push("/login");
      }
    }
  }, [router]);

 
  useEffect(() => {
    const fetchUserData = async () => {
      if (userSession) {
        try {
          const user = await GetUserById(userSession.id, userSession.token);
          setUserData(user);
          setEditedData(user); 
        } catch (error) {
          console.error("Error fetching user:", error);
          router.push("/login"); 
        }
      }
    };

    fetchUserData();
  }, [userSession, router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

 
  const openModal = () => setIsModalOpen(true);

 
  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

 
  const handleSaveImage = async () => {
    if (!selectedImage) return;
  
    const formData = new FormData();
    formData.append("file", selectedImage);  
  
    try {
      const response = await fetch(`https://back-deploy-5y3a.onrender.com/file/uploadImageUser/${userSession.id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userSession.token}`,
        },
        body: formData,
      });
  
      if (response.ok) {
        const updatedUser = await response.json();
        setUserData(updatedUser);
        closeModal(); // Cerrar modal
      } else {
        console.error("Error uploading image");
      }
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

    // Function to handle the "EDITAR" button click
    const handleSaveClick = async () => {
      if (!userSession || !userSession.id || !userSession.token) {
        console.error('User session data is missing');
        return;
      }
    
      try {
        const updatedUser = await UpdateUser(userSession.id, editedData, userSession.token);
        setUserData(updatedUser); // Update the local user data with the response
        setIsEditing(false); // Exit the editing mode
        console.log('User updated successfully:', updatedUser);
      } catch (error) {
        console.error('Error saving user:', error);
      }
    };
  

  return (
    <div className="flex flex-col lg:flex-row lg:mt-[14px] lg:h-[560px] bg-pink-100">

      <div className="w-full lg:w-1/4 p-4 lg:p-6 h-[470px] lg:h-[560px] bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <img
            src={userData?.profileImage || "/assets/userphoto.png"}
            alt=""
            className='className="w-[150px] lg:w-[150px] mt-20 h-[150px] lg:h-[150px] object-cover mx-auto rounded-full bg-gray-300"'
          />
          <button onClick={openModal} className="mt-4 text-pink-800 hover:underline">
            Editar Foto
          </button>
          <h2 className="mt-4 lg:mt-4 text-lg lg:text-xl font-semibold lg:font-bold text-gray-700">
            ¡Hola {userData?.name}!
          </h2>
        </div>
        <nav className="mt-6 lg:mt-10">
          <ul className="space-y-2 text-sm lg:text-lg">
            <li>
              <a href="#" className="flex items-center text-pink-800 font-semibold hover:underline">
                <span>👤 Perfil</span>
              </a>
            </li>
            <li>
              <Link href="/dashboarduser/orders" className="flex items-center text-gray-700 hover:underline">
                <span>📦 Mis pedidos</span>
              </Link>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:underline">
                <span>❌Cerrar sesión</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-full lg:w-3/4 p-2 lg:p-6  lg:mt-36 rounded-lg lg:h-[400px]">
        <h3 className="text-xl lg:text-2xl text-start lg:ml-5 rounded-xl p-2 mb-4 font-semibold">
          MIS DATOS PERSONALES
        </h3>
        <div className="h-auto lg:h-[295px] p-4 lg:p-6 rounded-lg ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-gray-600">Nombre</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={editedData.name}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                <p className="text-gray-800">{userData?.name}</p>
              )}
            </div>
            <div>
              <h4 className="text-gray-600">Teléfono</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={editedData.phone}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                <p className="text-gray-800">{userData?.phone}</p>
              )}
            </div>
            <div>
              <h4 className="text-gray-600">Email</h4>
              {/* {isEditing ? (
                <input
                  type="text"
                  name="email"
                  value={editedData.email}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                <p className="text-gray-800">{userData?.email}</p>
              )} */}
              <p className="text-gray-800">{userData?.email}</p>
            </div>
            <div>
              <h4 className="text-gray-600">Pais</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="Dni"
                  value={editedData.country}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                <p className="text-gray-800">{userData?.country}</p>
              )}
            </div>
            <div>
              <h4 className="text-gray-600">Ciudad</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="Dni"
                  value={editedData.city}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                <p className="text-gray-800">{userData?.city}</p>
              )}
            </div>
            <div>
              <h4 className="text-gray-600">Mi dirección de envío</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={editedData.address}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                <p className="text-gray-800">{userData?.address}</p>
              )}
            </div>
            <div>
              <h4 className="text-gray-600">Fecha de nacimiento</h4>
              {isEditing ? (
                <input
                  type="text"
                  name="birthDate"
                  value={editedData.birthDate}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                <p className="text-gray-800">{userData?.birthDate}</p>
              )}
            </div>
          </div>
          <div className="text-right">
            {isEditing ? (
              <button
                className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-800 transition duration-300 ease-in-out"
                onClick={handleSaveClick}>
                GUARDAR
              </button>
            ) : null}
            <button
              className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-800 transition duration-300 ease-in-out ml-4"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "CANCELAR" : "EDITAR"}
            </button>
          </div>
        </div>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray -800 bg-opacity-50"> <div className="bg-white p-6 rounded-lg shadow-lg"> <h2 className="text-lg font-semibold mb-4">Cambiar Foto de Perfil</h2> <input type="file" onChange={handleImageChange} /> <div className="mt-4 flex justify-end"> <button className="px-4 py-2 mr-2 bg-gray-300 rounded-md" onClick={closeModal} > Cancelar </button> <button className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-800 transition duration-300 ease-in-out" onClick={handleSaveImage} > Guardar </button> </div> </div> </div> )} </div> ); };

export default ProfileComponent;
