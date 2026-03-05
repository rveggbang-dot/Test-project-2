export default function EventCard({ title, description, image, status }) {

  const getStatusStyle = () => {
    switch (status) {
      case "COMING SOON":
        return "bg-purple-600";
      case "UPCOMING":
        return "bg-blue-600";
      case "LIVE":
        return "bg-green-500";
      case "FINISHED":
        return "bg-gray-600";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-zinc-900 rounded-xl shadow-md overflow-hidden border border-zinc-800 hover:-translate-y-1 hover:shadow-xl transition">

      {/* IMAGE CONTAINER */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover" />

        {/* STATUS BADGE */}
        <div
          className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-md text-white font-semibold ${getStatusStyle()}`}
        >
          {status}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <p className="text-gray-300 text-sm mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}