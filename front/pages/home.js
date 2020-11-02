import React, {useState} from 'react'
import Link from 'next/link'
import {Carousel, Button, Drawer } from 'antd'
import {BugTwoTone, CarTwoTone} from '@ant-design/icons'

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const home = () => {
    return(

        <div>
            <link rel="stylesheet" href="css/style.css" />
            <div>
            <header id="h1">
            
            </header>
    
            <body >
                <div>
                <div className="menubar">

                    <div className="logo">
                        <h1>ระบบการจัดการตรวจสอบครุภัณฑ์และวัสดุคงทนถาวร</h1>
                    </div>

                    <div className="dropdown" style={{ float: 'left' }}>
                        <button className="dropbtn"><a href="/home" style={{ border: 'none', color: 'white' }}>หน้าหลัก</a></button>
                    </div>


                    <div className="dropdown" style={{ float: 'right' }}>
                        <form>
                            <button className="dropbtn">
                                <a href="/login.html">ออกจากระบบ</a>
                            </button>
                        </form>
                    </div>

                    <div className="dropdown" style={{ float: 'right' }}>
                        <button className="dropbtn"><a href="http://intra.up.ac.th/inv/eInventory/Inventory_Report.aspx?sType=place&place=ICT" style={{ color: 'white' }}>รายงาน</a></button>
                    </div>

                    <div className="dropdown" style={{ float: 'right' }}>
                        <button className="dropbtn">จัดการครุภัณฑ์</button>
                        <div className="dropdown-content" style={{ left: 0 }}>
                            <a href="/durable_articles">ค้นหาครุภัณฑ์</a>
                            <a href="./form1.html">เพิ่มครุภัณฑ์</a>
                            <a href="/addqr.html">สร้างคิวอาร์โค้ด</a>
                            {/* <a href="#">แก้ไขครุภัณฑ์</a> */}
                        </div>
                    </div>
                </div>
                
                    
                
                </div>
                       
                    {/* ------------------------------------------------------------------------------------------ */}
                    
                    

                    

       
        
                        {/* <div className="div1">
                            <input id="sliderSwitch" className="slider__switch" type="checkbox" name="sliderSwitch" hidden value="" />
                                        <div className="slider">

                                        <div></div>   
                                        <ul className="slider__list">
                                                <li className="slider__slide"><img src="/img/s1.jpg" alt="Slide 1" /></li>
                                                <li className="slider__slide"><img src="/img/s2.jpg" alt="Slide 2" /></li>
                                            <li className="slider__slide"><img src="/img/s3.jpg" alt="Slide 3" /></li>
                                            <li className="slider__slide"><img src="/img/s1.jpg" alt="Slide 4" /></li>
                                        </ul>

                                        
                                    </div>
                                    <div className="slider__control">
                                        <label for="sliderSwitch" ></label>
                                    </div>
                                    
                                    <div className="yellow"  >
                                        <div id="calendar" >
                                            <div id="toolbar"></div>
                                            <div id="color-picker" className="show"></div>
                                            <div id="dates" className="show">
                                            <div id="lastMt">&lsaquo;</div>
                                            <div id="nextMt">&rsaquo;</div>
                                            <div id="months-cont">
                                                <div id="months">
                                                <span className="active month">January</span><span className="month">February</span><span className="month">March</span><span className="month">April</span><span className="month">May</span><span className="month">June</span><span className="month">July</span><span className="month">August</span><span className="month">September</span><span className="month">October</span><span className="month">November</span><span className="month">December</span>
                                            </div>
                                            </div>
                                            <div id="daysotweek">
                                                <div className="day">S</div>
                                                <div className="day">M</div>
                                                <div className="day">T</div>
                                                <div className="day">W</div>
                                                <div className="day">T</div>
                                                <div className="day">F</div>
                                                <div className="day">S</div>
                                            </div>
                                            <div id="days">
                                            </div>
                                            </div>
                                            <div id="info" className="hide " >
                                            <div id="actual-date"></div>
                                            <div id="back"></div>
                                                <div id="month-name"></div>
                                                <div id="weather">
                                                <div id="sun"></div>
                                                <div id="mountains"></div>
                                                <div id="rain">
                                                    <div className="raindrop" id="drop-1"></div>
                                                    <div className="raindrop center" id="drop-2"></div>
                                                    <div className="raindrop center" id="drop-3"></div>
                                                    <div className="raindrop" id="drop-4"></div>
                                                </div>
                                                <div id="temp">57&deg;<span>F</span></div>
                                                </div>
                                                <div id="bg-card">
                                                <div className="content"></div>
                                                </div>
                                            <div id="card">
                                                <div className="content">
                                                <div id="event-name"></div>
                                                <div id="event-details">
                                                <div className="col-3">
                                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                    <h3>Location</h3>
                                                    <p>12345 Generic Ave., Some City, Some State, 12345</p>
                                                </div>
                                                <div className="col-3">
                                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                                    <h3>Time</h3>
                                                    <p> 12:00 AM </p>
                                                </div>
                                                <div className="col-3">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    <h3>Attendee</h3>
                                                    <p>Me, You, and 2+</p>
                                                </div>
                                                    <div style="clear: both"></div>
                                                </div>
                                            
                                                </div>
                                            </div>
                                            </div>
                                            <div id="colors" className="hide">
                                            <div id="close">&times;</div>
                                            <p>Choose theme color</p>
                                            <div className="color" id="salmon"></div>
                                            <div className="color" id="dkpink"></div>
                                            <div className="color" id="red"></div>
                                            <div className="color" id="redorg"></div>
                                            <div className="color" id="orange"></div>
                                            <div className="color" id="orgylw"></div>
                                            <div className="color active" id="yellow"></div>
                                            <div className="color" id="green"></div>
                                            <div className="color" id="aqua"></div>
                                            <div className="color" id="teal"></div>
                                            <div className="color" id="sltbl"></div>
                                            <div className="color" id="pwdbl"></div>
                                            <div className="color" id="blue"></div>
                                            <div className="color" id="purple"></div>
                                            <div className="color" id="dkprpl"></div>
                                            </div>
                                        </div>
                                        </div>
                                    
                                        <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js'></script><script  src="/dist/script.js"></script>
                                    
                                    
                        </div> */}
                                    

                                

                            
                                
                    
                        



    
            </body>
                        
                        
            <section style={{ backgroundColor: 'linen', width: '100%' , textAlign:'center',height:'720px' ,}}>
            <Carousel autoplay style={{margin:'0 0 0 0'}}>
                <div>
                <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            </section>

        </div>  
        
        <footer/>                 
                        
        </div>

        
        
      

    )
} 
export default home