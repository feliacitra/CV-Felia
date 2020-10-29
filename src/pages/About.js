import React, { useState, useContext } from 'react';
import Citra from '../Image/Citra.jpg';
import Coment from '../utility/Hooks'; //memasukkan hook usetate untuk komentar
import ThemeContext from './theme-context';
const About = () => {
  const [coment, setComent] = useState([]);
  const addComent = (title) => {
    setComent([...coment, { title }]);
  };
  const themes = useContext(ThemeContext);
  return (
    <div style={themes}>
      <div className="conten">
        <h2>About Me</h2>
        <table width="900px">
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>Felia Citra Dwiyani Putri Rosyadi</td>
            <td rowSpan="3" width="350px" align="left">
              <img src={Citra} alt="" height="150px" width="100px" />
            </td>
          </tr>
          <tr>
            <td>Birthday, Place of Birth</td>
            <td>:</td>
            <td>28 March 1999, Tegal</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>:</td>
            <td>Slarang Lor Kec. Dukuhwaru, Tegal</td>
          </tr>
        </table>
        <h2>More</h2>
        <table width="750px">
          <tr>
            <td>
              I am 21 years old, female, single, and still studying at S1
              Informatics. I want to have a career to expand my experience I got
              from College as a Front End Web Developer
            </td>
          </tr>
        </table>
        <br />
        <ul>
          {coment.map((com) => {
            return <li>{com.title}</li>;
          })}
        </ul>
        <Coment addComent={addComent} />
      </div>
      <div className="footer">
        <p className="copy">Copyright@ 2020. Felia Citra</p>
      </div>
    </div>
  );
};

export default About;
