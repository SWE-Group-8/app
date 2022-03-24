import React from 'react';
import ericPic from "../images/Eric-P.jpg";
import javierPic from "../images/Javier-Rosa.jpg";
import zaqPic from "../images/zaquariah-holland.jpg";
import bondPic from "../images/Bond-Blanton.jpg";
import angeloPic from "../images/Angelo-M.png";

const About = () => {
  return (
    <>
    <div 
      style={{
        backgroundColor: 'blue',
        width: "100%",
        height: "100%"
      }}
    />
   
    <head>
      <h1>Welcome to our webpage!! This is our team!!</h1>
    </head>
    <body>
      
      <table width="100%">
        <tr>
          <td><img src={zaqPic} alt= "Zaquariah Holland" height="250" width="250" /><p>Project Manager Zaquariah Holland</p></td>
          <td><img src={ericPic} alt= "Eric P" height="250" width="250" /><p>Lead UI Designer Eric Por</p></td>
          <td><img src={javierPic} alt= "Javier De La Rosa" height="250" width="250" /><p>Accounts and Carts Manager Javier De La Rosa Quiros</p></td>
          <td><img src={bondPic} alt= "Javier De La Rosa" height="250" width="250" /><p>Items and Inventory Manager Bonf Blanton</p></td>
          <td><img src={angeloPic} alt= "Javier De La Rosa" height="250" width="250" /><p>Databse Management Lead Angelo Middleton</p></td>
        </tr>
      </table>
    </body>
    <h2>Testing branch commit again</h2>
    </>
  );
};
  
export default About;