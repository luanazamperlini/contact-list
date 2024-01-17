import React from "react"
import useState from "react"


    export default function ContactList() {

return(
    <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name:Luana</td>
              <td>Email:luazamperlini@gmail.com</td>
              <td>Phone:123-456-7890</td>
            </tr>
            <h2>
      components.map ((component){"=>"}(
      <span ContactList = {ContactList}>{component}</span>
      ))
      </h2>
            </tbody>
        </table>
        );
    }


    const[contacts, setInfo] = useState(ContactList)

    console.lof ("Contacts: ", contacts);





  






  