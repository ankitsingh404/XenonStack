// Sample property data (you can add more properties as needed)
const properties = [
    { id: 1, name: "Komal Stay House", location: "Barog,Shimla", price: "₹ 1500/night" },
    { id: 2, name: "Sameer Vacation House", location: "Jatong,Shimla", price: "₹ 2300/night" },
    { id: 3, name: "Batra Stays", location: "Narkanda, Shimla", price: "₹ 2400/night" }
];

// Store properties in localStorage
localStorage.setItem('properties', JSON.stringify(properties));

// Sign Up Logic
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        const email = document.getElementById('signup-email').value;

        // Simulate saving user data
        if (username && password && email) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({ username, password, email });
            localStorage.setItem('users', JSON.stringify(users));
            document.getElementById('signup-success').textContent = 'Signup successful!';
        } else {
            document.getElementById('signup-error').textContent = 'Please fill all fields.';
        }
    });
}

// Login Logic
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'index.html';  // Redirect to homepage after successful login
        } else {
            document.getElementById('login-error').textContent = 'Invalid username or password';
        }
    });
}

// Display properties on the homepage
const propertiesList = document.getElementById('properties-list');
if (propertiesList) {
    const storedProperties = JSON.parse(localStorage.getItem('properties')) || [];
    storedProperties.forEach(property => {
        const propertyCard = `
            <div class="property-card">
                <h3>${property.name}</h3>
                <p>Location: ${property.location}</p>
                <p>Price: ${property.price}</p>
                <button>Book Now</button>
            </div>
        `;
        propertiesList.innerHTML += propertyCard;
    });
}
