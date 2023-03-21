window.onload = function () {
    Particles.init({
      // normal options
      selector: ".background",
      color: "#f5cb5b",
      maxParticles: 80,
      speed: 0.3,
      connectParticles: true,
      // options for breakpoints
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 50,
            color: "#f5cb5b",
            connectParticles: true,
          },
        },
        {
          breakpoint: 425,
          options: {
            maxParticles: 30,
            connectParticles: true,
          },
        },
        {
          breakpoint: 320,
          options: {
            maxParticles: 5,
  
            // disables particles.js
          },
        },
      ],
    });
  };