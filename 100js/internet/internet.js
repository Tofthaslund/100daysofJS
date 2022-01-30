// Variables 
const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");


function setColor() {
    bgColor.classList.add("online")
}

async function connectionStatus () {
    try{
        const fetchResult = await
        fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' 
        + (new Date()).getTime());
        image.src = "./online.png";
        setColor();
        return fetchResult.status >= 200 && fetchResult.status < 300;
    } catch (error) {
        console.error(error);
        statusDisplay.textContent = "OOPSYour Internet Connection is Down.";
        image.src = "./online.png";
        bgColor.classList.remove("online")
    }
}

// Moitor the connection
setInterval(async () => {
    const result = await connectionStatus();
    if (result) {
        statusDisplay.textContent = "You are online!";
        setColor();
    }
}, 5000);

// Checks connection when page loads
window.addEventListener("load", async (event) => {
    if (connectionStatus() ) {
        statusDisplay.textContent = "ONline"
    } else {
        statusDisplay.textContent = "OFFline"
    }
});