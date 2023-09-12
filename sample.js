const storedUserInfo = localStorage.getItem("userInformation");
if (storedUserInfo) {
    const userInfo = JSON.parse(storedUserInfo);
    document.getElementById("firstname").textContent = userInfo.firstName;
    document.getElementById("lastname").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phonenumber").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
}

function storeinfo() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const city = prompt("Enter your city:");
    const state = prompt("Enter your state:");
    const userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
    };
    localStorage.setItem("userInformation", JSON.stringify(userInfo));

    document.getElementById("firstname").textContent = userInfo.firstName;
    document.getElementById("lastname").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phonenumber").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
}

storeinfo();
