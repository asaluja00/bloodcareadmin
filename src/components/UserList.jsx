import React, { useState, useEffect } from "react";


const dummy = [
    {
    "_id": "6438e46a554a72f97795eabc",
    "name": "Anmol",
    "email": "10@gmail.com",
    "receiveremail": "10@gmail.com",
    "mobile": 9898989898,
    "bloodgroup": "A+",
    "gender": "M",
    "age": 98,
    "weight": 98,
    "status": false,
    "__v": 0,
    "donaremail": "tejash@gmail.com"
    },
{
    "_id": "6438e472554a72f97795eabf",
    "name": "Muskan",
    "email": "abc@gmail.com",
    "receiveremail": "abc@gmail.com",
    "mobile": 98945674398,
    "bloodgroup": "AB+",
    "gender": "F",
    "age": 20,
    "weight": 50,
    "status": false,
    "__v": 0,
    "donaremail": "tejash@gmail.com"
},
{
    "_id": "6438e47d554a72f97795eac2",
    "name": "Aniket",
    "email": "ani@gmail.com",
    "receiveremail": "ani@gmail.com",
    "mobile": 7869989898,
    "bloodgroup": "AA+",
    "gender": "M",
    "age": 47,
    "weight": 58,
    "status": true,
    "__v": 0
},
{
    "_id": "6438e481554a72f97795eac5",
    "name": "Raj",
    "email": "xyz@gmail.com",
    "receiveremail": "xyz@gmail.com",
    "mobile": 9894589898,
    "bloodgroup": "C+",
    "gender": "M",
    "age": 64,
    "weight": 48,
    "status": false,
    "__v": 0
},
{
    "_id": "6438e487554a72f97795eac8",
    "name": "Nehal",
    "email": "neh@gmail.com",
    "receiveremail": "neh@gmail.com",
    "mobile": 7767699898,
    "bloodgroup": "B+",
    "gender": "F",
    "age": 55,
    "weight": 60,
    "status": true,
    "__v": 0
},
{
    "_id": "6438e48b554a72f97795eacb",
    "name": "Anisha",
    "email": "temp@gmail.com",
    "receiveremail": "temp@gmail.com",
    "mobile": 9868989898,
    "bloodgroup": "O+",
    "gender": "F",
    "age": 30,
    "weight": 50,
    "status": true,
    "__v": 0
},
{
    "_id": "6438e4c9554a72f97795eace",
    "name": "Shreya",
    "email": "ahr@gmail.com",
    "receiveremail": "ahr@gmail.com",
    "mobile": 9776598988,
    "bloodgroup": "B+",
    "gender": "F",
    "age": 33,
    "weight": 48,
    "status": false,
    "__v": 0
},
{
    "_id": "6438e4ca554a72f97795ead1",
    "name": "Riya",
    "email": "ri0@gmail.com",
    "receiveremail": "ri@gmail.com",
    "mobile": 7565989898,
    "bloodgroup": "O+",
    "gender": "F",
    "age": 34,
    "weight": 75,
    "status": true,
    "__v": 0
},
{
    "_id": "6438e51995c6ca1173ab8c29",
    "name": "Ansh",
    "email": "ansh@gmail.com",
    "receiveremail": "ansh@gmail.com",
    "mobile": 786579898,
    "bloodgroup": "O-",
    "gender": "M",
    "age": 23,
    "weight": 50,
    "status": true,
    "__v": 0
},
{
    "_id": "6438e51b95c6ca1173ab8c2c",
    "name": "Atul",
    "email": "atul@gmail.com",
    "receiveremail": "atul@gmail.com",
    "mobile": 9898989898,
    "bloodgroup": "AA+",
    "gender": "M",
    "age": 35,
    "weight": 78,
    "status": true,
    "__v": 0
},
{
    "_id": "6438e53c95c6ca1173ab8c2f",
    "name": "Anushka",
    "email": "anuu@gmail.com",
    "receiveremail": "anuu@gmail.com",
    "mobile": 7885689898,
    "bloodgroup": "AB+",
    "gender": "M",
    "age": 98,
    "weight": 98,
    "status": false,
    "__v": 0
},
{
    "_id": "6438e53e95c6ca1173ab8c32",
    "name": "Prerna",
    "email": "pre@gmail.com",
    "receiveremail": "pre@gmail.com",
    "mobile": 7886989898,
    "bloodgroup": "A+",
    "gender": "F",
    "age": 98,
    "weight": 98,
    "status": true,
    "__v": 0
},
{
    "_id": "6439202f865dddaf678f4de3",
    "name": "Tejash",
    "email": "tej@gmail.com",
    "receiveremail": "tej@gmail.com",
    "mobile": 6679669898,
    "bloodgroup": "A-",
    "gender": "M",
    "age": 25,
    "weight": 55,
    "status": true,
    "__v": 0
},
{
    "_id": "64392070865dddaf678f4de6",
    "name": "Nirav",
    "email": "nii@gmail.com",
    "receiveremail": "nii@gmail.com",
    "mobile": 7688989898,
    "bloodgroup": "AB+",
    "gender": "M",
    "age":28,
    "weight": 68,
    "status": false,
    "__v": 0
},
{
    "_id": "643922aa37092d7b41c3db61",
    "name": "Miya",
    "email": "miya@gmail.com",
    "receiveremail": "miya@gmail.com",
    "mobile": 7676567890,
    "bloodgroup": "AB+",
    "gender": "F",
    "age": 37,
    "weight": 67,
    "status": true,
    "__v": 0,
    "donaremail": "miya@gmail.com"
},
{
    "_id": "643a4b627ce6e447268a9719",
    "name": "Zoe",
    "email": "zoe@gmail.com",
    "receiveremail": "zoe@gmail.com",
    "mobile": 897766422,
    "bloodgroup": "AB+",
    "gender": "F",
    "age": 34,
    "weight": 68,
    "status": false,
    "__v": 0,
    "donaremail": "zoe@gmail.com"
},
{
    "_id": "643a4d3a7ce6e447268a9741",
    "name": "Abhishek",
    "email": "abhi@gmail.com",
    "receiveremail": "abhi@gmail.com",
    "mobile": 999945788,
    "bloodgroup": "AB+",
    "gender": "M",
    "age": 71,
    "weight": 67,
    "status": true,
    "__v": 0,
    "donaremail": "abhi@gmail.com"
},
{
    "_id": "643ae80cbc55fba632941b6c",
    "name": "Sanket",
    "email": "san@gmail.com",
    "receiveremail": "san@gmail.com",
    "mobile": 8888888888,
    "bloodgroup": "B+",
    "gender": "M",
    "age": 61,
    "weight": 89,
    "status": true,
    "__v": 0
},
{
    "_id": "643ae80cbc55fba632941b6c",
    "name": "Aditya",
    "email": "addi@gmail.com",
    "receiveremail": "addi@gmail.com",
    "mobile": 47895998888,
    "bloodgroup": "AB+",
    "gender": "M",
    "age": 17,
    "weight": 49,
    "status": false,
    "__v": 0
},


]
function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://backend-8pbe.onrender.com/receivedata");
      const responseData = await response.json();
      setData(responseData);
    }
    fetchData();
  }, []);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Blood Group
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              Weight
            </th>
          </tr>
        </thead>
        <tbody>
          {dummy.map((item) => {
            return <tr>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{item.mobile}</td>
              <td className="px-6 py-4">{item.bloodgroup}</td>
              <td className="px-6 py-4">{item.gender}</td>
              <td className="px-6 py-4">{item.age}</td>
              <td className="px-6 py-4">{item.weight}</td>
            </tr>
          })}   
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
