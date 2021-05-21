// import {Link} from 'react-router-dom'
// import React from 'react';
// import {db} from '../firebase/firebase'
// import { auth, database } from 'firebase-admin';

const FormHook = () => {
          
    
        
    // db.collection('Form').get().then((res) => {console.log(res.docs)})
    return (
    
    <div id="F1" dir="rtl">

        <h1>שאלון מש"ה</h1>
        <form> 

            <h4>במקרים בהם יש סקאלה: 1-5, כאשר 1 מייצג מצב טוב ו-5 מייצג מצב גרוע</h4>
            <h2 class="pre_titles">שייכות:</h2>
            <table className="form_table" id="table1">
        
             <tr>
                <td><p class="pQ">?מה הגיל שלך:</p></td>
                <td><input id="age" type="number" className="btn" min="1" max="120" ></input></td>
            </tr> 
            <br/>
            <tr>
                <td><p class="pQ">מצב משפחתי:</p></td>
                <td>
                    <form>
                        <label for="family_status"></label>
                            <select id="family_status" name="family_status">
                              <option value="נשוי/ה">נשוי/ה</option>
                              <option value="רווק/ה">רווק/ה</option>
                              <option value="אלמן/ה">אלמן/ה</option>
                              <option value="גרוש/ה">גרושה/ה</option>
                            </select>
                    </form>
                </td>
            </tr>
            <br/>
            <tr>
                <td><p class="pQ">?יש לך ילדים:</p></td>
                <td><button id="yes_kids" className="btn-yes">כן</button><button id="no_kids" className="btn-no">לא</button></td>
            </tr>
            <tr>
                <td><p class="pQ">אובדן אדם קרוב:</p></td>
                <td><button id="yes_lost" className="btn-yes">כן</button><button id="no_lost" className="btn-no">לא</button></td>
            </tr>
            <tr>
                <td><p class="pQ">מעבר זהות מינית:</p></td>
                <td><button id-="yes_sex_change" className="btn-yes">כן</button><button id-="no_sex_change" className="btn-no">לא</button></td>
            </tr>
            <tr>
                <td><p class="pQ">הכרה בזהות מינית של הסביבה: </p></td>
                <td><button id-="yes_sex_id" className="btn-yes">כן</button><button id-="no_sex_id" className="btn-no">לא</button></td>
            </tr>
            <br/>
            <tr>
                <td><p class="pQ">לאום:</p></td>
                <td>
                    <input type="radio" id="yehudi" name="nation" value="yehudi" class="radios"/>
                    <label for="yehudi">יהודי</label>
                    &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="yehudiO" name="nation" value="yehudiO" class="radios"/>
                    <label for="yehudiO">אחר</label>
                </td>
            </tr>
            <br/>
            <tr>
                <td><p class="pQ">אתה עולה חדש:  </p></td>
                <td><button id-="inmigrant-yes" className="btn-yes">כן</button><button id-="inmigrant-no" className="btn-no">לא</button></td>
            </tr>
            <br/>
            <tr>
                <td><p class="pQ">מצב מערכות היחסים הקרובות 1-5:</p></td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="relShip1" name="gender" value="relShip1" class="radios"/>
                    <label for="relShip1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="relShip2" name="gender" value="relShip2" class="radios"/>
                    <label for="relShip2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="relShip3" name="gender" value="relShip3" class="radios"/>
                    <label for="relShip3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="relShip4" name="gender" value="relShip4" class="radios"/>
                    <label for="relShip4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="relShip5" name="gender" value="relShip5" class="radios"/>
                    <label for="relShip5">5</label>
                </td>
            </tr>
            <br/>
            <tr>
                <td><p class="pQ">עבודה: </p></td>
                <td><button id="work-yes" className="btn-yes">כן</button><button id="work-no" className="btn-no">לא</button></td>
            </tr>
            <br/>
            <tr>
                <td><p class="pQ">מידת שביעות הרצון ממקום העבודה 1-5:</p></td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="staisf_work1" name="faith_conections" value="staisf_work1" class="radios"/>
                    <label for="staisf_work1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="staisf_work2" name="faith_conections" value="staisf_work2" class="radios"/>
                    <label for="staisf_work2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="staisf_work3" name="faith_conections" value="staisf_work3" class="radios"/>
                    <label for="staisf_work3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="staisf_work4" name="faith_conections" value="staisf_work4" class="radios"/>
                    <label for="staisf_work4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" id="staisf_work5" name="faith_conections" value="staisf_work5" class="radios"/>
                    <label for="staisf_work5">5</label>
                </td>
            </tr>
            <br/>
            <tr>
                <td><p class="pQ">הכרה בזהות מינית של הסביבה: </p></td>
                <td><button id="recog_sex_yes" className="btn-yes">כן</button><button id="recog_sex_no" className="btn-no">לא</button></td>
            </tr>

            </table>
            <hr class="dividing"/>
            <h2 class="pre_titles">יאוש \תקוה:</h2>
            <table className="form_table" id="table2">

                <tr> 
                    <td><p class="pQ">נסיונות אובדניים:</p></td>
                    <td><button id="tries_lost_yes" className="btn-yes">כן</button><button id="tries_lost_no" className="btn-no">לא</button></td>
                </tr>

                <tr> 
                    <td><p class="pQ">מחשבות אובדניות פאסיבות: </p></td>
                    <td><button id="thinks_lost_yes1" className="btn-yes">כן</button><button id="thinks_lost_no1" className="btn-no">לא</button></td>
                </tr>

                <tr> 
                    <td><p class="pQ">מחשבות אובדניות אקטביות: </p></td>
                    <td><button id="thinks_lost_yes2" className="btn-yes">כן</button><button id="thinks_lost_no2" className="btn-no">לא</button></td>
                </tr>

                <tr> 
                    <td><p class="pQ">תוכנית פעולה למעשה אובדני: </p></td>
                    <td><button id="program_lost_yes" className="btn-yes">כן</button><button id="program_lost_no" className="btn-no">לא</button></td>
                </tr>
                <br/>
                <tr>
                    <td><p class="pQ">חיבור למקורות אמונה: </p></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="faith_conections1" name="faith_conections" value="faith_conections1" class="radios"/>
                        <label for="faith_conections1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="faith_conections2" name="faith_conections" value="faith_conections2" class="radios"/>
                        <label for="faith_conections2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="faith_conections3" name="faith_conections" value="faith_conections3" class="radios"/>
                        <label for="faith_conections3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="faith_conections4" name="faith_conections" value="faith_conections4" class="radios"/>
                        <label for="faith_conections4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="faith_conections5" name="faith_conections" value="faith_conections5" class="radios"/>
                        <label for="faith_conections5">5</label>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td><p class="pQ">מצב השינה:</p></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="sleep1" name="sleep" value="sleep1" class="radios"/>
                        <label for="sleep1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="sleep2" name="sleep" value="sleep2" class="radios"/>
                        <label for="sleep2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="sleep3" name="sleep" value="sleep3" class="radios"/>
                        <label for="sleep3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="sleep4" name="sleep" value="sleep4" class="radios"/>
                        <label for="sleep4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="sleep5" name="sleep" value="sleep5" class="radios"/>
                        <label for="sleep5">5</label>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td><p class="pQ">רמת תיאבון:</p></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="appetite1" name="appetite" value="appetite1" class="radios"/>
                        <label for="appetite1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="appetite2" name="appetite" value="appetite2" class="radios"/>
                        <label for="appetite2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="appetite3" name="appetite" value="appetite3" class="radios"/>
                        <label for="appetite3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="appetite4" name="appetite" value="appetite4" class="radios"/>
                        <label for="appetite4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="appetite5" name="appetite" value="appetite5" class="radios"/>
                        <label for="appetite5">5</label>
                    </td>
                </tr>
                <br/>
                <tr> 
                    <td><p class="pQ">צריכת אלכוהול:</p></td>
                    <td><button id="alcohol_yes" className="btn-yes">כן</button><button id="alcohol_no" className="btn-no">לא</button></td>
                </tr>

                <tr> 
                    <td><p class="pQ">שימוש בסמים:</p></td>
                    <td><button id="drugs_yes" className="btn-yes">כן</button><button id="drugs_no" className="btn-no">לא</button></td>
                </tr>
            </table>

            <hr class="dividing"/>

            <h2 class="pre_titles">בדידות\ניכור: </h2>
            <table className="form_table" id="table3">

                <tr>
                    <td><p class="pQ">חיבור לקהילה באזור המגורים: </p></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="connect_comunity1" name="connect_comunity" value="connect_comunity1" class="radios"/>
                        <label for="connect_comunity1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="connect_comunity2" name="connect_comunity" value="connect_comunity2" class="radios"/>
                        <label for="connect_comunity2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="connect_comunity3" name="connect_comunity" value="connect_comunity3" class="radios"/>
                        <label for="connect_comunity3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="connect_comunity4" name="connect_comunity" value="connect_comunity4" class="radios"/>
                        <label for="connect_comunity4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="connect_comunity5" name="connect_comunity" value="connect_comunity5" class="radios"/>
                        <label for="connect_comunity5">5</label>
                    </td>
                </tr>
                <br/>
                <hr width="300%"/>
                <tr>
                    <td><p class="pQ">חיבור לקהילה בסטטוס דומה: </p></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="status1" name="status" value="status1" class="radios"/>
                        <label for="status1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="status2" name="status" value="status2" class="radios"/>
                        <label for="status2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="status3" name="status" value="status3" class="radios"/>
                        <label for="status3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="status4" name="status" value="status4" class="radios"/>
                        <label for="status4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="status5" name="status" value="status5" class="radios"/>
                        <label for="status5">5</label>
                    </td>
                </tr>
                <hr width="300%"/>
                <br/>
                <tr>
                    <td><p class="pQ">סטטוס מגורים: </p></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="family" name="status_live" value="family" class="radios"/>
                        <label for="family">משפחה</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="roomates" name="status_live" value="roomates" class="radios"/>
                        <label for="roomates">שוטפים</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="alone" name="status_live" value="alone" class="radios"/>
                        <label for="alone">לבד</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="other_lives" name="status_live" value="other_lives" class="radios"></input>
                        <label for="other_lives">אחר </label>&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                </tr>
                <br/>
                <hr width="300%"/>
                <tr>
                    <td><p class="pQ">תקשורת עם הסביבה בערוצים שונים:  </p></td>
                    <p class="pQ">וירטואלית:</p>
                        <input type="radio" id="virtual1" name="virtual" value="virtual1" class="radios"/>
                        <label for="virtual1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="virtual2" name="virtual" value="virtual2" class="radios"/>
                        <label for="virtual2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="virtual3" name="virtual" value="virtual3" class="radios"/>
                        <label for="virtual3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="virtual4" name="virtual" value="virtual4" class="radios"/>
                        <label for="virtual4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="virtual5" name="virtual" value="virtual5" class="radios"/>
                        <label for="virtual5">5</label>

                        <p class="pQ">פיזית:</p>
                        <input type="radio" id="inperson1" name="inperson" value="inperson1" class="radios"/>
                        <label for="inperson1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="inperson2" name="inperson" value="inperson2" class="radios"/>
                        <label for="inperson2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="inperson3" name="inperson" value="inperson3" class="radios"/>
                        <label for="inperson3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="inperson4" name="inperson" value="inperson4" class="radios"/>
                        <label for="inperson4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="inperson5" name="inperson" value="inperson5" class="radios"/>
                        <label for="inperson5">5</label>

                        <p class="pQ">טלפונית:</p>
                        <input type="radio" id="phone1" name="phone" value="phone1" class="radios"/>
                        <label for="phone1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="phone2" name="phone" value="phone2" class="radios"/>
                        <label for="phone2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="phone3" name="phone" value="phone3" class="radios"/>
                        <label for="phone3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="phone4" name="phone" value="phone4" class="radios"/>
                        <label for="phone4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="phone5" name="phone" value="phone5" class="radios"/>
                        <label for="phone5">5</label>
                        <br/>
                        <label for="other_connect">אחר</label>
                        <input type="radio" id="other_connect" name="other_connect" value="other_connect" class="radios"/>
                </tr>
                <br/> <hr width="300%"/>
                <tr>
                    <td><p class="pQ">שהיה בבית לבד:</p></td>
                    <td>
                        <input type="radio" id="time_house1" name="time_house" value="time_house1" class="radios"/>
                        <label for="time_house1">למעלה מחצי יום -1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="time_house2" name="time_house" value="time_house2" class="radios"/>
                        <label for="time_house2">למעלה מיום - 3</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="time_house3" name="time_house" value="time_house3" class="radios"/>
                        <label for="time_house3">יותר מיומיים  -5</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                </tr>
                <br/><hr width="300%"/>
                <tr>
                    <td><p class="pQ">קשר עם אדם משמעותי:</p></td>
                    <td>
                        <input type="radio" id="keep_touch1" name="keep_touch" value="keep_touch1" class="radios"/>
                        <label for="keep_touch1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="keep_touch2" name="keep_touch" value="keep_touch2" class="radios"/>
                        <label for="keep_touch2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="keep_touch3" name="keep_touch" value="keep_touch3" class="radios"/>
                        <label for="keep_touch3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="keep_touch4" name="keep_touch" value="keep_touch4" class="radios"/>
                        <label for="keep_touch4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="keep_touch5" name="keep_touch" value="keep_touch5" class="radios"/>
                        <label for="keep_touch5">5</label>
                    </td>
                </tr>
                <br/><hr width="300%"/>
                <tr>
                    <td><p class="pQ">תחושת מימוש עצמי: </p></td>
                    <td>
                        <input type="radio" id="self_sense1" name="self_sense" value="self_sense1" class="radios"/>
                        <label for="self_sense1">1</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="self_sense2" name="self_sense" value="self_sense2" class="radios"/>
                        <label for="self_sense2">2</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="self_sense3" name="self_sense" value="self_sense3" class="radios"/>
                        <label for="self_sense3">3</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="self_sense4" name="self_sense" value="self_sense4" class="radios"/>
                        <label for="self_sense4">4</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" id="self_sense5" name="self_sense" value="self_sense5" class="radios"/>
                        <label for="self_sense5">5</label>
                    </td>
                </tr>

            </table>
            <hr width="300%"/>
            <br/>

            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}

export default FormHook