import React,{ createContext } from "react";
import { useState } from "react";
export const store = createContext()
 const Data = (props) => {
    const [data,SetData] = useState([{

        id:1,
        category: 'Bollywood',
        Image:"https://i.gadgets360cdn.com/large/karm_yuddh_trailer_1663670985141.jpg?downsize=950:*",
        Title:"Karm Yuddh Trailer: Paoli Dam-Led Hotstar Specials Sets September 30 Release Date",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date :"30 September 2022"
    },
    {
        id:2,
        category: 'Bollywood',
        Image:"https://i.gadgets360cdn.com/large/karm_yuddh_trailer_1663670985141.jpg?downsize=950:*",
        Title:"Karm Yuddh Trailer: Paoli Dam-Led Hotstar Specials Sets September 30 Release Date",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date :"30 September 2022"
    },
    {
        id:3,
        category: 'Bollywood',
        Image:"https://i.gadgets360cdn.com/large/karm_yuddh_trailer_1663670985141.jpg?downsize=950:*",
        Title:"Karm Yuddh Trailer: Paoli Dam-Led Hotstar Specials Sets September 30 Release Date",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date :"30 September 2022"
    },
    {
        id:4,
        category: 'Bollywood',
        Image:"https://i.gadgets360cdn.com/large/karm_yuddh_trailer_1663670985141.jpg?downsize=950:*",
        Title:"Karm Yuddh Trailer: Paoli Dam-Led Hotstar Specials Sets September 30 Release Date",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date :"30 September 2022"
    },
    {
        id:5,
        category: 'Bollywood',
        Image:"https://i.gadgets360cdn.com/large/karm_yuddh_trailer_1663670985141.jpg?downsize=950:*",
        Title:"Karm Yuddh Trailer: Paoli Dam-Led Hotstar Specials Sets September 30 Release Date",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date :"30 September 2022"
    },
    {
        id:6,
        category: 'Bollywood',
        Type    : "story",
        Image:"https://i.gadgets360cdn.com/large/karm_yuddh_trailer_1663670985141.jpg?downsize=950:*",
        Title:"Karm Yuddh Trailer: Paoli Dam-Led Hotstar Specials Sets September 30 Release Date",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date :"30 September 2022"
    },
    //------------------------------Hollywood----------------------------------------
    {
        id:7,
        category:'Hollywood',
        Image:"https://images.hindustantimes.com/img/2022/09/23/550x309/Avatar_2_1651132982030_1663923948856_1663923948856.webp",
        Title:"James Cameron says Avatar is impactful only 'if people show up for part 2'",
        about:"Avatar director James Cameron opened up about his 2009 film's global and cultural impact and hopes for the upcoming sequel The Way of Water.",
        date :"23 September 2022"

    },
    {
        id:8,
        category:'Hollywood',
        Image:'https://images.hindustantimes.com/img/2022/09/13/550x309/andrew_garfield_1663034112984_1663034719547_1663034719547.jpg',
        Title:'Avengers assemble on Emmy Awards 2022 red carpet',
        about:'Andrew Garfield arrives at the 74th Primetime Emmy Awards on Monday, Sept. 12, 2022, at the Microsoft Theater in Los Angeles.(Richard Shotwell/Invision/AP)',
        date:'12 September 2022'
    },
    {
        id:9,
        category:'Hollywood',
        Image:'https://images.hindustantimes.com/img/2022/09/23/550x309/priyanka_chopra_new_york_1663950202598_1663950224131_1663950224131.jpg',
        Title:'Priyanka Chopra relishes golgappa, poses with Nick Jonas at her NYC restaurant',
        about:'Priyanka Chopra hosted a night out at her New York City restaurant Sona for her ‘favourite’ people and shared the pictures on Instagram.',
        date:'23 September 2022'
    },
    {
        id:10,
        category:'Hollywood',
        Image:'https://hollywoodlife.com/wp-content/uploads/2022/09/Tyler-Perry-Defends-Prince-Harry-Meghan-Markles-True-Love-mega-ftr1.jpg?resize=768%2C432',
        Title:'Tyler Perry Defends Prince Harry & Meghan Markle’s Love After Funeral Reports Target Couple',
        about:'These two people love each other, Tyler Perry gushed on a recent episode of TODAY. Watch his full interview here.',
        date:'23 September 2022'
    },
    {
        id:11,
        category:'Hollywood',
        Image:'http://mightyscoops.com/wp-content/uploads/2021/10/Ted-Cruz-4-Million.jpg',
        Title:'The Net Worth of Famous Celebrities and Politicians: You Won’t Believe Greta Thunberg’s Fortune!',
        about:'Born to a Cuban immigrant father and American mother, conservative politician Ted Cruz has served as a United States Senator in Texas for eight years. With an annual salary of $174K, his net worth is estimated to be $4 million. He is also well-known for this staunch beliefs and criticisms of American liberals.',
        date:'16 March 2022'
    },
    //-----------------Technology-----------------------------------------------------
    {
        id:12,
        category:'Technology',
        Image:'https://dailytechupdate.com/wp-content/uploads/2022/09/Galaxy-Z-Flip-4-and-Z-Fold-4-Sales-2-800x500.png',
        Title:'Samsung Galaxy Z Flip 4 and Z Fold 4 Sales are Below the Expectations',
        about:'The starting price of the Samsung Galaxy Z Flip 4 and Z Fold 4 was set at 12999 Yuan (around $1837.55) and 7499 Yuan (about $1060).',
        date:'sales in 2022'
    },
    {
        id:13,
        category:'Technology',
        Image:'https://dailytechupdate.com/wp-content/uploads/2022/07/62ce7c4b12b038503.jpg_e1080-800x500.jpg',
        Title:'JAMESDONKEY unveils its new mechanical keyboard RS2 model',
        about:'Mechanical keyboards have been trending in recent years, with a number of manufacturers jumping on the bandwagon.',
        date:'14 July 2022'
    },
    {
        id:14,
        category:'Technology',
        Image:'https://dailytechupdate.com/wp-content/uploads/2022/09/Microchip-e1617299979361-800x500.jpg',
        Title:'Toyota Cuts Its Car Production By 100,000 Monthly Due To Chip Shortage',
        about:'There are various factors behind the chip shortage problem worldwide. Some of them are related to COVID-19, some refer to the war in Ukraine, and some come from increased demand for various “smart” products. ',
        date:'22 Septenber 2022'
    },
    {
        id:15,
        category:'Technology',
        Image:'https://dailytechupdate.com/wp-content/uploads/2022/09/b05ba7f4-2243-410b-a165-bddc7189388b-800x500.png',
        Title:'OnePlus Nord Watch Renders and Specs Completely Leaked',
        about:'Earlier this year, we learned that OnePlus is going to further expand its Nord series of low-to-mid-range products and launch a smartwatch.',
        date:'23 September 2022'
    },
    {
        id:16,
        category:'Technology',
        Image:'https://dailytechupdate.com/wp-content/uploads/2022/08/OnePlus-10T-Featured-A-800x500.jpg',
        Title:'OnePlus Cancels Launch Event Of OnePlus Ace Pro',
        about:'The top brands are canceling their new product launch events one after another. Yesterday, for some unknown reasons, Moto canceled the conference, at which it should release the Moto X30 Pro 200MP camera smartphone and the new Moto Razr 2022 clamshell smartphone. Today, OnePlus followed Moto’s steps and said the new product launch conference won’t take place. At the moment, we still have no information on when the company is going to hold an event and take wraps off the OnePlus Ace Pro flagship phone.',
        date:'3 August 2022'
    },
    //--------------------------Fitness-----------------------------------------------------
    {
        id:17,
        category:'Fitness',
        Image:'https://static.toiimg.com/thumb/msid-93600927,imgsize-38750,width-800,height-600,resizemode-75/93600927.jpg',
        Title:'Ready to hit the gym? Here’s why you must get a good fitness coach',
        date:'17 Augest 2022'
    },
    {
        id:18,
        category:'Fitness',
        Image:'https://static.toiimg.com/thumb/msid-92343397,imgsize-94134,width-800,height-600,resizemode-75/92343397.jpg',
        Title:'Yoga workshop to help people lead a healthy lifestyle',
        date:'20 june 2022'
    },
    {
        id:19,
        category:'Fitness',
        Image:'https://i.zoomtventertainment.com/story/Fitness_lessons_from_Akshay_Kumar_to_remain_forever_healthy__0.jpg?tr=w-600,h-450,fo-auto',
        Title:'Fitness lessons from over 50-year-old Akshay Kumar to remain forever healthy',
        date:'18 Ocober 2022'
    },
    {
        id:20,
        category:'Fitness',
        Image:'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/young-man-practicing-yoga-at-park-1296X728-header.jpg?w=1155&h=1528',
        Title:'How to Practice Anulom Vilom Breathing',
        date:'12 September 2022'
    },
    {
        id:21,
        category:'Fitness',
        Image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/US_Army_51673_aerobathon.jpg/450px-US_Army_51673_aerobathon.jpg',
        Title:'Aerobic exercise',
        date:'21 September 2022'
    },
    //--------------Food-----------------------------------------------------------
    {
        id:22,
        category:'Food',
        Image:'https://cdn.sanity.io/images/czqk28jt/prod_bk_us/99b3ffc140339c0966fd59a532ae279b6f1bab58-2000x1000.jpg?w=750&q=40&fit=max&auto=format',
        Title:'Burger',
        about:'A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll',
        date:'12 August 2022'
    },
    {
        id:22,
        category:'Food',
        Image:'https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-1.jpg',
        Title:'Chicken tikka masala',
        about:'Chicken tikka masala is a dish consisting of roasted marinated chicken chunks in a spiced sauce. The sauce is usually creamy and orange-coloured. The dish was popularised by cooks from India living in Great Britain and is offered at restaurants around the world.',
        date:'24 September 2022'
    },
    {
        id:22,
        category:'Food',
        Image:'https://images.aws.nestle.recipes/resized/4c9aa68c71815ec2a542513268ea25cf_Dal_Makhani_-_Plating_1500_700.jpg',
        Title:'Dal makhani',
        about:'Dal makhani is a dish originating in New Delhi, India. A relatively modern variation of traditional lentil dishes, it is made with urad dal and other pulses, and includes butter and cream',
        date:''
    },
    {
        id:22,
        category:'Food',
        Image:'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/7/2016/10/22102016_dumbiriyani05.jpg',
        Title:'Biryani',
        about:'A meat-and-rice mixed dish that’s a popular staple food in Kashmiri cuisine.',
        date:'5 January 2022'
    },
    {
        id:22,
        category:'Food',
        Image:'https://i.pinimg.com/736x/60/7e/a5/607ea59d907a627a8031001a5b9610ed.jpg',
        Title:'Crisp papadum',
        about:'A papadam or appalam is an Indian deep fried dough of black gram bean flour, either fried or cooked with dry heat until crunchy. Other flours made from lentils, chickpeas, rice, tapioca, millet or potato are also used.',
        date:' 5 February 2022'
    }
])
  return (
    <div>
        <store.Provider value={[data,SetData]}>
        {props.children}
        </store.Provider>
    </div>
  )
}
export default Data;