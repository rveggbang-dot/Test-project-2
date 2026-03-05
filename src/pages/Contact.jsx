export default function Contact(){
return(
<section className="max-w-xl mx-auto p-10">

<h2 className="text-3xl font-bold mb-6">Contact</h2>

<form className="space-y-4">

<input
className="w-full border p-3 rounded"
placeholder="Name"
/>

<input
className="w-full border p-3 rounded"
placeholder="Email"
/>

<textarea
className="w-full border p-3 rounded"
placeholder="Message"
/>

<button className="px-6 py-3 bg-black text-white rounded">
Send
</button>

</form>

</section>
)
}