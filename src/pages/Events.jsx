import EventCard from "../components/EventCard"
import event1 from "../assets/event1.jpg"

export default function Events(){

const events = [
{
title:"Weekly Scrim Night",
date:"Every Saturday",
image:event1
},
{
title:"Community Tournament",
date:"Next Month",
image:event1
}
]

return(

<section className="bg-black text-white py-20">

<div className="max-w-6xl mx-auto px-6">

<h1 className="text-4xl font-bold text-center mb-12">
Community Events
</h1>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

{events.map((event,index)=>(
<EventCard key={index} {...event}/>
))}

</div>

</div>

</section>

)

}