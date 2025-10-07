import './navbar.css'

function Navbar() {
  return (
    <div className="navbar-wrapper">
      {/* Orange Navbar Background */}
      <div className="nav">
        {/* WeldersKit Text */}
        <h2 className='text text-black text-2xl'>WeldersKit Marketplace</h2>
      </div>
      
      {/* Scrolling Safety Warning - Below the navbar */}
      <div className="scrolling-container">
        <div className="scrolling-text-animation">
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
    </div>
  );
}

export default Navbar;
