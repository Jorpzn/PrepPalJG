document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const chatBtn = document.getElementById("chat-btn");
    const chatWindow = document.getElementById("chat-window");
    const closeChat = document.getElementById("close-chat");

    chatBtn.addEventListener("click", function() {
        chatWindow.classList.toggle("hidden");
    });

    closeChat.addEventListener("click", function() {
        chatWindow.classList.add("hidden");
    });

    // Firebase and Chat functionality
    const database = firebase.database().ref();
    let allMessages = document.getElementById('all-messages');
    let usernameElem = document.getElementById('username');
    let messageElem = document.getElementById("message");
    let sendBtn = document.getElementById('send-btn');

    function updateDB(event) {
        event.preventDefault();

        const data = {
            USERNAME: usernameElem.value,
            MESSAGE: messageElem.value
        };

        console.log(data);

        database.push(data);

        // Clear the message input field after sending
        messageElem.value = "";
    }

    sendBtn.addEventListener("click", updateDB);
    database.on("child_added", addMessageToBoard);

    function addMessageToBoard(rowData) {
        const data = rowData.val();
        console.log(data);

        let singleMessage = makeSingleMessageHTML(data.USERNAME, data.MESSAGE);
        allMessages.appendChild(singleMessage);

        console.log(singleMessage);
    }

    function makeSingleMessageHTML(usernameTxt, messageTxt) {
        let parentDiv = document.createElement("div");
        parentDiv.className = 'single-message';

        let usernameP = document.createElement("p");
        usernameP.className = 'single-message-username';
        usernameP.innerText = usernameTxt + ":";
        parentDiv.appendChild(usernameP);

        let messageP = document.createElement("p");
        messageP.innerText = messageTxt;
        parentDiv.appendChild(messageP);

        return parentDiv;
    }

    // Optional: Submit with Enter key
    document.querySelector('form').addEventListener('keyup', (event) => {
        if (event.key === "Enter") {
            updateDB(event);
        }
    });
});
