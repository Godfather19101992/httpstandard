document.addEventListener("DOMContentLoaded", function () {
    // Create and insert the CSS for the sidebar and footer
    const styles = `
        .sidebar {
            width: 250px;
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            background-color: #333;
            color: white;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between; /* Ensures content is spaced properly */
        }

        .sidebar a {
            color: white;
            text-decoration: none;
            margin: 10px 0;
        }

        .sidebar a:hover {
            text-decoration: underline;
        }

        .sidebar-copyright {
            margin-top: auto; /* Pushes the copyright to the bottom */
            text-align: center;
            font-size: 12px;
            color: #ccc;
        }

        .sidebar-copyright a {
            color: #FFD700; /* Gold color for the link */
            text-decoration: none;
        }

        .sidebar-copyright a:hover {
            text-decoration: underline;
        }

        .logout-btn {
            position: fixed;
            top: 5px;
            right: 20px;
            background-color: #f44336;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
        }

        .logout-btn:hover {
            background-color: #d32f2f;
        }
        
    `;

    // Create a <style> element to add the styles dynamically
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;

    // Append the style element to the head of the document
    document.head.appendChild(styleSheet);

    // Create the sidebar container
    var sidebar = document.createElement("div");
    sidebar.className = "sidebar";

    // Set up the sidebar HTML content
    sidebar.innerHTML = `
        <img class="bluebirdlogo" src="./image/bluebirdlogo.png" alt="logo">
        <a href="dashboard.php">Dashboard</a>
        <a href="bookings.php">Booking</a>
        <a href="guestbooking.php">Register Guest</a>
        <a href="rooms.php">Manage Rooms</a>
        <a href="add_user.php">Add User</a>
    `;

    // Create and append the copyright section at the bottom of the sidebar
    var copyrightDiv = document.createElement("div");
    copyrightDiv.className = "sidebar-copyright";
    copyrightDiv.innerHTML = `&copy; 2024 <a href="https://www.homeworkit.rf.gd" target="_blank">Homework IT Consultant</a>. All rights reserved.`;
    
    // Append the copyright information to the sidebar
    sidebar.appendChild(copyrightDiv);

    // Insert the sidebar at the beginning of the body
    document.body.insertBefore(sidebar, document.body.firstChild);

    // Create and add the logout button (top-right corner)
    var logoutButton = document.createElement("a");
    logoutButton.href = "logout.php";
    logoutButton.className = "logout-btn";
    logoutButton.innerHTML = "Log Out";
    document.body.appendChild(logoutButton);
});
