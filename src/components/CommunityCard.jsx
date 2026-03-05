export default function CommunityCard({name,desc,image}){

return(

<div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer">

<img
src={image}
className="h-48 w-full object-cover"
/>

<div className="p-6">

<h3 className="text-xl font-bold mb-2">
{name}
</h3>

<p className="text-gray-400">
{desc}
</p>

</div>

</div>

)

}