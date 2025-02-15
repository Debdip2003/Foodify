import { useEffect, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import CustomSwitch from "../components/CustomSwitch"; // Ensure correct import

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isCitizen, setIsCitizen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(
    localStorage.getItem("profilePicture") || "https://via.placeholder.com/100"
  ); // Default profile image

  const fileInputRef = useRef(null);

  const handleCameraClick = () => {
    fileInputRef.current.click(); // Open the file input
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Fix the typo here
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfilePicture(imageURL); // Update profile picture
    }
  };

  useEffect(() => {
    localStorage.setItem("profilePicture", profilePicture);
  }, [profilePicture]);

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center pb-6">
      {/* Profile Image */}
      <div className="relative mt-20">
        <img
          src={profilePicture}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
        />
        <button
          className="absolute bottom-1 right-1 bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600 transition"
          onClick={handleCameraClick}
        >
          <FaCamera size={14} />
        </button>
        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      {/* Personal Info */}
      <div className="w-full px-6 mt-6">
        <h3 className="text-lg font-semibold mb-3">Personal Info</h3>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <label className="text-gray-600 block">Your name</label>
          <input
            type="text"
            defaultValue="Tommy Jason"
            className="w-full font-medium text-lg bg-gray-100 p-2 rounded-md outline-none mt-1"
            disabled={!isEditing}
          />

          <label className="text-gray-600 block mt-4">Occupation</label>
          <input
            type="text"
            defaultValue="Manager"
            className="w-full font-medium text-lg bg-gray-100 p-2 rounded-md outline-none mt-1"
            disabled={!isEditing}
          />

          <label className="text-gray-600 block mt-4">Employer</label>
          <input
            type="text"
            defaultValue="Overlay Design"
            className="w-full font-medium text-lg bg-gray-100 p-2 rounded-md outline-none mt-1"
            disabled={!isEditing}
          />

          <label className="text-gray-600 block mt-4">U.S Citizen</label>
          <div className="mt-2">
            <CustomSwitch
              isOn={isCitizen}
              handleToggle={() => setIsCitizen(!isCitizen)}
            />
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="w-full px-6 mt-6">
        <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <label className="text-gray-600 block">Phone</label>
          <input
            type="text"
            defaultValue="+234 806 2856 543"
            className="w-full font-medium text-lg bg-gray-100 p-2 rounded-md outline-none mt-1"
            disabled={!isEditing}
          />

          <label className="text-gray-600 block mt-4">Email</label>
          <input
            type="email"
            defaultValue="segunphilips@mail.com"
            className="w-full font-medium text-lg bg-gray-100 p-2 rounded-md outline-none mt-1"
            disabled={!isEditing}
          />
        </div>
      </div>

      {/* Edit Button */}
      <button
        className="bg-green-500 text-white py-3 mt-6 w-11/12 max-w-sm text-lg font-medium rounded-lg shadow-md hover:bg-green-600 transition"
        onClick={() => setIsEditing(!isEditing)}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default Profile;
