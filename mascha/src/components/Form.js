
const FormHook = () => {
          
    
        
 
    return (
    
        <div id="F1" dir="rtl">

        <h1>שאלון מש"ה</h1>

        <form encType="text/plain" action="mailto:avni971@gmail.com" method="post"> 

            <h4>במקרים בהם יש סקאלה: 1-5, כאשר 1 מייצג מצב טוב ו-5 מייצג מצב גרוע</h4>
            <h2 className="pre_titles">שייכות:</h2>
            <table className="form_table" id="table1">
        <tbody>
             <tr>
                <td><p className="pQ">?מה הגיל שלך:</p></td>
                <td><input id="age" type="number" className="btn" min="1" max="120" ></input></td>
            </tr> 
            {/* <br/> */}
            <tr>
                <td className="pQ">מצב משפחתי:</td>
                <td>
                    <div>
                        <label htmlFor="family_status"></label>
                            <select id="family_status" name="family_status">
                              <option value="נשוי/ה">נשוי/ה</option>
                              <option value="רווק/ה">רווק/ה</option>
                              <option value="אלמן/ה">אלמן/ה</option>
                              <option value="גרוש/ה">גרושה/ה</option>
                            </select>
                    </div>
                </td>
            </tr>
            {/* <br/> */}
            <tr>
                <td className="pQ">?יש לך ילדים:</td>
                <td><input type="radio" id="kid_yes" name="kids" value="yes"/>כן&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="kid_no" name="kids" value="no" />לא</td>
            </tr>
            <tr>
                <td className="pQ">אובדן אדם קרוב:</td>
                <td><input type="radio" id="lost_yes" name="lost" value="yes"/>כן&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="lost_no" name="lost" value="no" />לא</td>
            </tr>
            <tr>
                <td className="pQ">מעבר זהות מינית:</td>
                <td><input type="radio" id="gener_yes" name="gener" value="yes"/>כן&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="gener_no" name="gener" value="no" />לא</td>
            </tr>
            <tr>
                <td className="pQ">הכרה בזהות מינית של הסביבה:</td>
                <td><input type="radio" id="id_gener_yes" name="id_gener" value="yes"/>כן&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="id_gener_no" name="id_gener" value="no" />לא</td>
            </tr>
            {/* <br/> */}
            <tr>
                <td className="pQ">לאום:</td>
                <td>
                    <input type="radio" id="yehudi" name="nation" value="yehudi" className="radios"/>
                    <label htmlFor="yehudi">יהודי</label>
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="yehudiO" name="nation" value="yehudiO" className="radios"/>
                    <label htmlFor="yehudiO">אחר</label>
                </td>
            </tr>
            {/* <br/> */}
            <tr>
                <td><input type="radio" id="migrant_yes" name="migrant" value="yes"/>כן&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="migrant_no" name="migrant" value="no" />לא</td>
            </tr>
            {/* <br/> */}
            <tr>
                <td className="pQ">מצב מערכות היחסים הקרובות 1-5:</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="relShip1" name="gender" value="relShip1" className="radios"/>
                    <label htmlFor="relShip1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="relShip2" name="gender" value="relShip2" className="radios"/>
                    <label htmlFor="relShip2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="relShip3" name="gender" value="relShip3" className="radios"/>
                    <label htmlFor="relShip3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="relShip4" name="gender" value="relShip4" className="radios"/>
                    <label htmlFor="relShip4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="relShip5" name="gender" value="relShip5" className="radios"/>
                    <label htmlFor="relShip5">5</label>
                </td>
            </tr>
            {/* <br/> */}
            <tr>
                <td className="pQ">עבודה:</td>
                <td><input type="radio" id="work_yes" name="work" value="yes"/>כן&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="work_no" name="work" value="no" />לא</td>
            </tr>
            {/* <br/> */}
            <tr>
                <td className="pQ">מידת שביעות הרצון ממקום העבודה 1-5:</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="staisf_work1" name="faith_conections" value="staisf_work1" className="radios"/>
                    <label htmlFor="staisf_work1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="staisf_work2" name="faith_conections" value="staisf_work2" className="radios"/>
                    <label htmlFor="staisf_work2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="staisf_work3" name="faith_conections" value="staisf_work3" className="radios"/>
                    <label htmlFor="staisf_work3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="staisf_work4" name="faith_conections" value="staisf_work4" className="radios"/>
                    <label htmlFor="staisf_work4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="staisf_work5" name="faith_conections" value="staisf_work5" className="radios"/>
                    <label htmlFor="staisf_work5">5</label>
                </td>
            </tr>
            {/* <br/> */}
            </tbody>
            </table>
            <hr className="dividing"/>
            <h2 className="pre_titles">יאוש \תקוה:</h2>
            <table className="form_table" id="table2">
            <tbody>
                <tr> 
                    <td className="pQ">נסיונות אובדניים:</td>
                    <td><input type="radio" id="tries_yes" name="tries" value="yes"/>כן&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="tries_no" name="tries" value="no" />לא</td>
                </tr>

                <tr> 
                    <td className="pQ">מחשבות אובדניות פאסיבות:</td>
                    <td><input type="radio" id="thinks_yes" name="thinks" value="yes"/>כן&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="thinks_no" name="thinks" value="no" />לא</td>
                </tr>

                <tr> 
                    <td className="pQ">מחשבות אובדניות אקטביות:</td>
                    <td><input type="radio" id="thinks_act_yes" name="thinks_act" value="yes"/>כן&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="thinks_act_no" name="thinks_act" value="no" />לא</td>
                </tr>

                <tr> 
                    <td className="pQ">תוכנית פעולה למעשה אובדני: </td>
                    <td><input type="radio" id="program_yes" name="program" value="yes"/>כן&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="program_no" name="program" value="no" />לא</td>
                </tr>
                {/* <br/> */}
                <tr>
                    <td className="pQ">חיבור למקורות אמונה: </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="faith_conections1" name="faith_conections" value="faith_conections1" className="radios"/>
                        <label htmlFor="faith_conections1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="faith_conections2" name="faith_conections" value="faith_conections2" className="radios"/>
                        <label htmlFor="faith_conections2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="faith_conections3" name="faith_conections" value="faith_conections3" className="radios"/>
                        <label htmlFor="faith_conections3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="faith_conections4" name="faith_conections" value="faith_conections4" className="radios"/>
                        <label htmlFor="faith_conections4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="faith_conections5" name="faith_conections" value="faith_conections5" className="radios"/>
                        <label htmlFor="faith_conections5">5</label>
                    </td>
                </tr>
                {/* <br/> */}
                <tr>
                    <td className="pQ">מצב השינה:</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="sleep1" name="sleep" value="sleep1" className="radios"/>
                        <label htmlFor="sleep1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="sleep2" name="sleep" value="sleep2" className="radios"/>
                        <label htmlFor="sleep2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="sleep3" name="sleep" value="sleep3" className="radios"/>
                        <label htmlFor="sleep3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="sleep4" name="sleep" value="sleep4" className="radios"/>
                        <label htmlFor="sleep4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="sleep5" name="sleep" value="sleep5" className="radios"/>
                        <label htmlFor="sleep5">5</label>
                    </td>
                </tr>
                {/* <br/> */}
                <tr>
                    <td className="pQ">רמת תיאבון:</td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="appetite1" name="appetite" value="appetite1" className="radios"/>
                        <label htmlFor="appetite1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="appetite2" name="appetite" value="appetite2" className="radios"/>
                        <label htmlFor="appetite2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="appetite3" name="appetite" value="appetite3" className="radios"/>
                        <label htmlFor="appetite3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="appetite4" name="appetite" value="appetite4" className="radios"/>
                        <label htmlFor="appetite4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="appetite5" name="appetite" value="appetite5" className="radios"/>
                        <label htmlFor="appetite5">5</label>
                    </td>
                </tr>
                {/* <br/> */}
                <tr> 
                    <td  className="pQ">צריכת אלכוהול:</td>
                    <td><input type="radio" id="alcohol_yes" name="alcohol" value="yes"/>כן&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="alcohol_no" name="alcohol" value="no" />לא</td>
                </tr>

                <tr> 
                    <td className="pQ">שימוש בסמים:</td>
                    <td><input type="radio" id="drugs_yes" name="drugs" value="yes"/>כן&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="drugs_no" name="drugs" value="no" />לא</td>
                </tr>
                </tbody>
            </table>

            <hr className="dividing"/>

            <h2 className="pre_titles">בדידות\ניכור: </h2>
            <table className="form_table" id="table3">
            <tbody>
                <tr>
                    <td className="pQ">חיבור לקהילה באזור המגורים: </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="connect_comunity1" name="connect_comunity" value="connect_comunity1" className="radios"/>
                        <label htmlFor="connect_comunity1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="connect_comunity2" name="connect_comunity" value="connect_comunity2" className="radios"/>
                        <label htmlFor="connect_comunity2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="connect_comunity3" name="connect_comunity" value="connect_comunity3" className="radios"/>
                        <label htmlFor="connect_comunity3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="connect_comunity4" name="connect_comunity" value="connect_comunity4" className="radios"/>
                        <label htmlFor="connect_comunity4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="connect_comunity5" name="connect_comunity" value="connect_comunity5" className="radios"/>
                        <label htmlFor="connect_comunity5">5</label>
                    </td>
                </tr>
                {/* <br/> */}
                {/* <hr width="300%"/> */}
                <tr>
                    <td className="pQ">חיבור לקהילה בסטטוס דומה: </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="status1" name="status" value="status1" className="radios"/>
                        <label htmlFor="status1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="status2" name="status" value="status2" className="radios"/>
                        <label htmlFor="status2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="status3" name="status" value="status3" className="radios"/>
                        <label htmlFor="status3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="status4" name="status" value="status4" className="radios"/>
                        <label htmlFor="status4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="status5" name="status" value="status5" className="radios"/>
                        <label htmlFor="status5">5</label>
                    </td>
                </tr>
                {/* <hr width="300%"/> */}
                {/* <br/> */}
                <tr>
                    <td className="pQ">סטטוס מגורים:</td>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="family" name="status_live" value="family" className="radios"/>
                        <label htmlFor="family">משפחה</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="roomates" name="status_live" value="roomates" className="radios"/>
                        <label htmlFor="roomates">שוטפים</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="alone" name="status_live" value="alone" className="radios"/>
                        <label htmlFor="alone">לבד</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="other_lives" name="status_live" value="other_lives" className="radios"></input>
                        <label htmlFor="other_lives">אחר </label>&nbsp;&nbsp;&nbsp;&nbsp;
                    
                </tr>
                {/* <br/> */}
                {/* <hr width="300%"/> */}
                <tr>
                    <td className="pQ">תקשורת עם הסביבה בערוצים שונים:<br></br>
 
                    <span className="pQ"><br></br>וירטואלית:</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    
                        <input type="radio" id="virtual1" name="virtual" value="virtual1" className="radios"/>
                        <label htmlFor="virtual1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="virtual2" name="virtual" value="virtual2" className="radios"/>
                        <label htmlFor="virtual2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="virtual3" name="virtual" value="virtual3" className="radios"/>
                        <label htmlFor="virtual3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="virtual4" name="virtual" value="virtual4" className="radios"/>
                        <label htmlFor="virtual4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="virtual5" name="virtual" value="virtual5" className="radios"/>
                        <label htmlFor="virtual5">5</label>
                    
                        <span className="pQ"><br></br>פיזית:</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    
                        <input type="radio" id="inperson1" name="inperson" value="inperson1" className="radios"/>
                        <label htmlFor="inperson1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="inperson2" name="inperson" value="inperson2" className="radios"/>
                        <label htmlFor="inperson2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="inperson3" name="inperson" value="inperson3" className="radios"/>
                        <label htmlFor="inperson3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="inperson4" name="inperson" value="inperson4" className="radios"/>
                        <label htmlFor="inperson4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="inperson5" name="inperson" value="inperson5" className="radios"/>
                        <label htmlFor="inperson5">5</label>

                        <span className="pQ"><br></br>טלפונית:</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    
                        <input type="radio" id="phone1" name="phone" value="phone1" className="radios"/>
                        <label htmlFor="phone1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="phone2" name="phone" value="phone2" className="radios"/>
                        <label htmlFor="phone2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="phone3" name="phone" value="phone3" className="radios"/>
                        <label htmlFor="phone3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="phone4" name="phone" value="phone4" className="radios"/>
                        <label htmlFor="phone4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="phone5" name="phone" value="phone5" className="radios"/>
                        <label htmlFor="phone5">5</label>&nbsp;&nbsp;
                    
                        {/* <br/> */}
                        <input type="radio" id="other_connect" name="other_connect" value="other_connect" className="radios"/>
                        <label htmlFor="other_connect">אחר</label>
                        </td>
                </tr>
                {/* <br/>  */}
                {/* <hr width="300%"/> */}
                <tr>
                    <td className="pQ">שהיה בבית לבד:</td>
                    <td>
                        <label htmlFor="time_house1"><br></br><br></br>למעלה מחצי יום</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="time_house1" name="time_house" value="time_house1" className="radios"/>
                        <label htmlFor="time_house2"><br></br>למעלה מיום </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="time_house2" name="time_house" value="time_house2" className="radios"/>
                        {/* <br></br> */}
                        <label htmlFor="time_house3"><br></br>יותר מיומיים  -5</label>
                        <input type="radio" id="time_house3" name="time_house" value="time_house3" className="radios"/>
                    </td>
                </tr>
                {/* <br/> */}
                {/* <hr width="300%"/> */}
                <tr>
                    <td className="pQ">קשר עם אדם משמעותי:</td>
                    <td>
                        <input type="radio" id="keep_touch1" name="keep_touch" value="keep_touch1" className="radios"/>
                        <label htmlFor="keep_touch1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="keep_touch2" name="keep_touch" value="keep_touch2" className="radios"/>
                        <label htmlFor="keep_touch2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="keep_touch3" name="keep_touch" value="keep_touch3" className="radios"/>
                        <label htmlFor="keep_touch3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="keep_touch4" name="keep_touch" value="keep_touch4" className="radios"/>
                        <label htmlFor="keep_touch4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="keep_touch5" name="keep_touch" value="keep_touch5" className="radios"/>
                        <label htmlFor="keep_touch5">5</label>
                    </td>
                </tr>
                {/* <br/> */}
                {/* <hr width="300%"/> */}
                <tr>
                    <td className="pQ">תחושת מימוש עצמי: </td>
                    <td>
                        <input type="radio" id="self_sense1" name="self_sense" value="self_sense1" className="radios"/>
                        <label htmlFor="self_sense1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="self_sense2" name="self_sense" value="self_sense2" className="radios"/>
                        <label htmlFor="self_sense2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="self_sense3" name="self_sense" value="self_sense3" className="radios"/>
                        <label htmlFor="self_sense3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="self_sense4" name="self_sense" value="self_sense4" className="radios"/>
                        <label htmlFor="self_sense4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="self_sense5" name="self_sense" value="self_sense5" className="radios"/>
                        <label htmlFor="self_sense5">5</label>
                    </td>
                </tr>
                </tbody>
            </table>
            {/* <hr width="300%"/> */}
            {/* <br/> */}


            {/* <br/> */}
            <button className="btn btn-primary">Submit</button>
            
        </form>
        
    </div>
    
    )
}

export default FormHook