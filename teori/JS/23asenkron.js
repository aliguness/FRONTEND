function handler() {
    console.log("asenkron");
  }
  
  function asenkron() {
    setTimeout(handler, 3000);
  }
  
  function senkron() {
    console.log("senkron");
  }
  
  asenkron();
  senkron();
  
  // non-blocking
  // CPU cycle
  // DNS => Domain Name Server
  // Monolithic, Service Oriented, Microservices