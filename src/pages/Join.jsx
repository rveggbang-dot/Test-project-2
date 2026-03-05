export default function Join(){

return(

<section className="min-h-screen bg-black text-white py-24 px-6">

<div className="max-w-5xl mx-auto text-center">

{/* TITLE */}
<h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
Join William Community
</h1>

<p className="text-gray-400 mb-14 max-w-2xl mx-auto text-lg">
Gabung bersama gamer lain, ikut scrim, tournament,
dan diskusi game setiap hari.
</p>


<div className="grid md:grid-cols-3 gap-8">

{/* DISCORD */}
<a
href="https://discord.gg/ZBmpbFdFke"
target="_blank"
className="bg-indigo-600/90 border border-indigo-500 rounded-2xl p-8 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30 transition duration-300"
>

<h2 className="text-2xl font-bold mb-3">
🎮 Discord Server
</h2>

<p className="text-gray-200">
Voice chat, scrim, dan diskusi komunitas.
</p>

</a>


{/* WHATSAPP GROUP */}
<a
href="https://chat.whatsapp.com/EhkBR0mUCys5aQBZ7pEgrx?mode=gi_t"
target="_blank"
className="bg-green-600/90 border border-green-500 rounded-2xl p-8 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 transition duration-300"
>

<h2 className="text-2xl font-bold mb-3">
💬 WhatsApp Group
</h2>

<p className="text-gray-200">
Diskusi santai dan info event komunitas.
</p>

</a>


{/* WHATSAPP CHANNEL */}
<a
href="https://whatsapp.com/channel/0029VbANsu95q08TUbV3Sh1Z"
target="_blank"
className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 transition duration-300"
>

<h2 className="text-2xl font-bold mb-3">
📢 WhatsApp Channel
</h2>

<p className="text-gray-300">
Pengumuman event & update komunitas.
</p>

</a>

</div>

</div>

</section>

)
}