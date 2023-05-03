import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import { Link } from 'react-router-dom';
import '../styles/Experience.css';
function Experience() {
  return (
    <div className='experience'>

      <VerticalTimeline lineColor='#3C4048'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2017 - 2022'
          iconStyle={{ background: "#3C4048", color: '#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Faculty of Engineering, Ain-Shams university, EG</h3>
          <p>Bachelor's degree in Engineering Project Management </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='9-2022'
          iconStyle={{ background: "#e9d35b", color: '#fff'}}
          icon={<CardMembershipIcon />}
        >
          <h3 className='vertical-timeline-element-title'>"Project Management" course, Columbia University, New York: <Link target="_blank" className='linker' to={'https://www.coursera.org/account/accomplishments/verify/678S7F8G73NR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'}> certificate</Link></h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='10-2022'
          iconStyle={{ background: "#e9d35b", color: '#fff'}}
          icon={<CardMembershipIcon />}
        >
          <h3 className='vertical-timeline-element-title'>"Primavera P6 Advanced Training" course, Udemy: <Link target="_blank" className='linker' to={'https://www.udemy.com/certificate/UC-8ea14379-ef36-4f7c-845b-b397357cabda/'}> certificate</Link></h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2023'
          iconStyle={{ background: "#3C4048", color: '#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            "Project Management" diploma from American University in Cairo (AUC).
          </h3>
          <p> 
            specialized in "Planning, Scheduling, Project Lifecycle,Budgeting & Financial control and Resources Management" 
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2023'
          iconStyle={{ background: "#3C4048", color: '#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            "CS50x" in Computer Science, Harvard University.
          </h3>
        </VerticalTimelineElement>
        
      </VerticalTimeline>

    </div>
  )
}

export default Experience