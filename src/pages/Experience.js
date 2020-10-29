import React, { useContext } from 'react';
import ThemeContext from './theme-context';
const Experience = () => {
  const themes = useContext(ThemeContext);
  return (
    <div style={themes}>
      <div className="conten">
        <h2>Education</h2>
        <table width="750px">
          <tr>
            <td width="25%">2017 - Now</td>
            <td width="1%">:</td>
            <td>Telkom Institute of Technology Purwokerto</td>
          </tr>
          <tr>
            <td>2014 - 2017</td>
            <td>:</td>
            <td>State Senior High School 3 Slawi</td>
          </tr>
        </table>
      </div>

      <div className="conten">
        <h2>Work Experience</h2>
        <table width="750px">
          <tr>
            <td width="25%">August 2020 – October 2020</td>
            <td width="1%">:</td>
            <td>Internship at Badan Pusat Statistik Kab. Banyumas</td>
          </tr>
          <tr>
            <td>March 2019–July 2019</td>
            <td>:</td>
            <td>
              Lab Assistant digital system course at the electrical engineering
              and digital engineering laboratory Telkom Institute of Technology
              Purwokerto
            </td>
          </tr>
          <tr>
            <td>March 2020–July 2020</td>
            <td>:</td>
            <td>
              Lab Assistant digital system course at the electrical engineering
              and digital engineering laboratorium Telkom Institute of
              Technology Purwokerto
            </td>
          </tr>
        </table>
      </div>

      <div className="footer">
        <p className="copy">Copyright@ 2020. Felia Citra</p>
      </div>
    </div>
  );
};

export default Experience;
