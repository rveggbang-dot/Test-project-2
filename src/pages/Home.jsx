import Hero from "../components/Hero"
import CommunityCard from "../components/CommunityCard"
import EventCard from "../components/EventCard"

import ml from "../assets/ml.jpg"
import pubg from "../assets/pubg.jpg"
import valorant from "../assets/valorant.jpg"
import event1 from "../assets/event1.jpg"

export default function Home(){

const communities = [
{
name:"Mobile Legends Squad",
desc:"Komunitas pemain ML aktif scrim & tournament",
image: ml
},
{
name:"PUBG Battleground Team",
desc:"Push rank, tournament & squad war",
image: pubg
},
{
name:"Valorant Tactical Team",
desc:"Team FPS tactical dengan latihan rutin",
image: valorant
}
]

const events = [
{
title:"Weekly Scrim Night",
date:"Every Saturday",
image: event1
},
{
title:"Community Tournament",
date:"Next Month",
image: event1
}
]

return(
<div>

<Hero/>

{/* COMMUNITY SECTION */}

<section className="py-20 bg-gray-950 text-white">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
William Community
</h2>

<p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
Join squads, build teamwork, and compete with players from our growing gaming community.
</p>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

{communities.map((item,index)=>(
<CommunityCard key={index} {...item}/>
))}

</div>

</div>

</section>


{/* EVENTS SECTION */}

<section className="py-20 bg-black text-white border-t border-gray-800">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
Upcoming Events
</h2>

<p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
Participate in scrims, tournaments, and weekly gaming events hosted by the community.
</p>

<div className="grid md:grid-cols-2 gap-8">

{events.map((event,index)=>(
<EventCard key={index} {...event}/>
))}

</div>

</div>

</section>

</div>
)

}