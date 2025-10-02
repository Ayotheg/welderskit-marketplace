import './home.css'
import { welders } from './welders' 


function WelderCard({ name, bio, image, phone, award }) {
  return (
    <div className="bg-black border-2 border-[#ffb000] rounded-3xl p-6 shadow-2xl shadow-[#ffb000]/20 hover:shadow-[#ffb000]/40 transition-all duration-300 mt-9">
      {/* Circular Image with Gradient Border */}
      <div className="flex justify-center mb-5">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ffb000] via-orange-500 to-red-500 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-black"></div>
          </div>
          <img 
            src={image} 
            alt={name} 
            className="relative w-32 h-32 object-cover rounded-full border-4 border-transparent bg-gradient-to-br from-[#ffb000] via-orange-500 to-red-500 p-1"
            style={{
              clipPath: 'circle(50%)'
            }}
          />
        </div>
      </div>
      
      {/* Profile Details */}
      <div className="profile-details space-y-2">
        <h3 className="text-center text-[#ffb000] text-xl font-bold uppercase tracking-wide">
          {name}
        </h3>
        <p className="text-center text-gray-300 text-sm leading-relaxed">
          {bio}
        </p>
        <p className="text-center text-orange-400 text-xs font-semibold italic">
          {award}
        </p>
      </div>
      
      {/* Contact Button */}
      <button className="mt-5 w-full bg-gradient-to-r from-[#ffb000] to-orange-500 hover:from-orange-500 hover:to-[#ffb000] text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-[#ffb000]/30 hover:shadow-[#ffb000]/60 hover:scale-105">
        <i className="bi bi-whatsapp text-lg mr-2"></i>
        <i className="bi bi-telephone text-lg mr-2"></i>
        {phone}
      </button>
    </div>
  );
}

function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
      {welders.map((welder, index) => (
        <WelderCard
          key={index}
          name={welder.name}
          bio={welder.bio}
          image={welder.image}
          phone={welder.phone}
          award={welder.award}
        />
      ))}
    </div>
  )
}

export default Home
