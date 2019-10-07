function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function demo() {
    console.log('Taking a break...');
    await sleep(2000);
    console.log('Two seconds later, showing sleep in a loop...');
  
    // Sleep in loop
    for (let i = 0; i < 5; i++) {
      if (i === 3)
        await sleep(2000);
      console.log(i);
    }
  }

function home_render() {
  document.getElementById("Images").innerHTML = "<img src='home/Untitled.png' alt='The Image35665' width='500' height='300'/>";

  document.getElementById("Images2").innerHTML = "<img src='home/th02L4E843.jpg' alt='The Image' width='500' height='300'/>";

  document.getElementById("Images3").innerHTML = "<img src='home/Word Art.jpeg' alt='The Image' width='500' height='300'/>";

  document.getElementById("Images4").innerHTML = "<img src='home/hackbreakbuild.jpg' alt='The Image' width='500' height='300'/>";

  document.getElementById("Images5").innerHTML = "<img src='home/Hackers.jpg' alt='The Image' width='500' height='300'/>";


}

function ip_render() {
    
    
    document.getElementById("Images").innerHTML = "<img src='IP/ip.jpg' alt='The Image' width='600' height='400'/>";
    
    document.getElementById("Images2").innerHTML = "<img src='IP/spoof.jpg' alt='The Image' width='600' height='400'/>";

    document.getElementById("Images3").innerHTML = "   ";

  document.getElementById("Images4").innerHTML = "      ";

  document.getElementById("Images5").innerHTML = "    ";


    
}
function tcp_render() {
    document.getElementById("Images").innerHTML = "<img src='TCP/Blindspoof.jpg' alt='The Image' width='600' height='400'/>";
    
    document.getElementById("Images2").innerHTML = "<img src='TCP/TCPintercept.jpg' alt='The Image' width='600' height='400'/>"

    document.getElementById("Images3").innerHTML = "   ";

  document.getElementById("Images4").innerHTML = "   ";

  document.getElementById("Images5").innerHTML = "   ";

}
// function dns_render() {



// }
function ping_render() {

        document.getElementById("Images").innerHTML = "<img src='Ping/Overkill.jpg' alt='The Image' width='600' height='400'/>"

        document.getElementById("Images2").innerHTML = "<img src='Ping/ddos-illustrations-1.jpg' alt='The Image' width='600' height='400'/>"

        
        document.getElementById("Images3").innerHTML = "   ";

        document.getElementById("Images4").innerHTML = "   ";
  
        document.getElementById("Images5").innerHTML = "   ";
}