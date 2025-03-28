import React, { useEffect, useState } from "react";
// import { database } from "../firebase/firebase"; // Import Firebase database
import { ref, onValue } from "firebase/database";
import { database } from "./firebase";

const UserData = () => {
  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    // Reference to the "userDataRecords" node in Firebase
    const userDataRef = ref(database, "userDataRecords");

    // Listen for value changes in the database
    onValue(userDataRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const userList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setUsers(userList);
      } else {
        setUsers([]);
      }
    });

    // Cleanup function
    return () => {};
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">User Data</h2>
    <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
      {users.length > 0 ? (
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition"
            >
              <p className="text-lg font-semibold text-gray-900">
                {user.name || "No Name"}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span>{" "}
                {user.email || "No Email"}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span>{" "}
                {user.phone || "No Phone Number"}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Message:</span>{" "}
                {user.message || "No Message"}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No user data available.</p>
      )}
    </div>
  </div>
  );
};

export default UserData;
