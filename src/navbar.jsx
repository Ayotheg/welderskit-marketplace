import './navbar.css'

function Navbar() {
  return (
    <>
      <div className="nav text-2xl text-black"></div>
      <h2 className='text text-black text-2xl absolute'>WeldersKit Marketplace</h2>
      
      {/* Scrolling Safety Warning */}
      <div className="scrolling-container bg-[#ff6a0000] py-2 overflow-hidden z-999">
        <div className="scrolling-text-animation text-white font-bold text-sm md:text-base whitespace-nowrap">
          <span className="inline-block px-8">
            ⚠️ NEVER PAY IN ADVANCE TO WELDERS
          </span>
          <span className="inline-block px-8">
            🛡️ MAKE SURE TO STAY SAFE ON THE PLATFORM
          </span>
          <span className="inline-block px-8">
            💡 BUY MATERIALS YOURSELF
          </span>
          <span className="inline-block px-8">
            📋 WE ARE A DIRECTORY SERVICE ONLY
          </span>
          {/* Duplicate for seamless loop */}
          <span className="inline-block px-8">
            ⚠️ NEVER PAY IN ADVANCE TO WELDERS
          </span>
          <span className="inline-block px-8">
            🛡️ MAKE SURE TO STAY SAFE ON THE PLATFORM
          </span>
          <span className="inline-block px-8">
            💡 BUY MATERIALS YOURSELF
          </span>
          <span className="inline-block px-8">
            📋 WE ARE A DIRECTORY SERVICE ONLY
          </span>
        </div>
      </div>
      
      <style>{`
        .scrolling-container {
          position: relative;
          width: 100%;
        }
        
        .scrolling-text-animation {
          display: inline-block;
          animation: scroll-left 30s linear infinite;
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .scrolling-container:hover .scrolling-text-animation {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}

export default Navbar;
