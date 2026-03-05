import { Link, useLocation, useNavigate } from "react-router-dom"

export default function Navbar(){

const location = useLocation()
const navigate = useNavigate()

// halaman yang hanya pakai tombol back
const backPages = ["/join","/about","/events"]

if(backPages.includes(location.pathname)){
return(

<header className="bg-black/80 backdrop-blur border-b border-gray-800 sticky top-0 z-50">

<div className="max-w-6xl mx-auto px-6 py-4 flex items-center">

<button
onClick={() => navigate(-1)}
className="text-gray-300 text-lg font-medium hover:text-purple-400 transition flex items-center gap-2"
>
← Back
</button>

</div>

</header>

)
}

const linkClass = (path) =>
`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
location.pathname === path
? "bg-purple-600 text-white shadow-md shadow-purple-500/30"
: "text-gray-300 hover:text-white hover:bg-gray-800"
}`

return(

<header className="bg-black/80 backdrop-blur border-b border-gray-800 sticky top-0 z-50">

<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

{/* LOGO */}
<h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent tracking-wide">
William Community
</h1>

{/* MENU */}
<nav className="flex gap-2">

<Link to="/" className={linkClass("/")}>Home</Link>
<Link to="/about" className={linkClass("/about")}>About</Link>
<Link to="/events" className={linkClass("/events")}>Events</Link>
<Link to="/join" className={linkClass("/join")}>Join</Link>
<Link to="/contact" className={linkClass("/contact")}>Contact</Link>

</nav>

</div>

</header>

)

}