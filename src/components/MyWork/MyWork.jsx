import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import first from '../../assets/First.jpeg';
import seconda from '../../assets/Second1.jpeg';
import secondb from '../../assets/Second2.jpeg';
import thirda from '../../assets/Third1.jpeg';
import thirdb from '../../assets/Third2.jpg';

const MyWork = () => {
  return (
    <div  className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <label htmlFor="more"><div className="mywork-showmore">
            <p>Show More</p>
            <FaArrowRightLong  className='arrow'/>
        </div>
        </label>
        <input type="checkbox" name="" id="more" />
        <div className='more-details'>
            <div className='details'> 
                <img src={first} alt="" className='first-image' />
                <img src={seconda} alt="" className='first-image' />
                <img src={secondb} alt="" className='first-image' />
                <img src={thirda} alt="" className='first-image' />
                <img src={thirdb} alt="" className='first-image' />
            </div>

            <label htmlFor="more">
                <IoClose className='x'/>
            </label>  
        </div>
      
    </div>
  )
}

export default MyWork
