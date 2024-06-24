import React from 'react'
import Card from '../../common/Card'
import people from "/Groupic.png";
import place from "/location.png";
import product from "/basket.png";
import program from "/calender.png";

function AllCards({ isLoggedIn }) {
    return (
        <div className='w-11/12 mx-auto py-12 lg:py-24 grid gap-6'>
            <div className="flex flex-col lg:flex-row gap-6">
                <Card isLoggedIn={isLoggedIn} icon={people} title={"People"} description={"Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."} buttonText={"Connect"} color={"#8064A2"} />
                <Card isLoggedIn={isLoggedIn} icon={place} title={"Place"} description={"Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."} buttonText={"Meet up"} color={"#77933C"} />
            </div>
            <div className="flex flex-col lg:flex-row gap-6 ">
                <Card isLoggedIn={isLoggedIn} icon={product} title={"Product"} description={"Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."} buttonText={"Get it"} color={"#C0504D"} />
                <Card isLoggedIn={isLoggedIn} icon={program} title={"Program"} description={"Find events, meetups and workshops related to your hobby.  Register or buy tickets online."} buttonText={"Attend"} color={"#0096C8"} />
            </div>
        </div>
    )
}

export default AllCards