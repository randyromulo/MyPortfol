// Function to simulate typewriter effect with in and out transition
function typeWriterInOut(element, text, speed) {
    let i = 0;
    let isTyping = true;

    const typeInterval = setInterval(() => {
        if (isTyping) {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                isTyping = false;
                setTimeout(() => {
                    isTyping = true;
                    i = 0;
                    element.innerHTML = '';
                }, 1000); // Change the delay before erasing text (in milliseconds)
            }
        } else {
            if (i < text.length) {
                element.innerHTML = element.innerHTML.slice(0, -1);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }
    }, speed); // Change the typing speed (in milliseconds)
}

// Typewriter effect with in and out transition for header text
const headerText = document.querySelector('.header h1'); // Select the header h1 element
const text = headerText.innerText; // Get the text content
headerText.innerHTML = ''; // Clear the text content
typeWriterInOut(headerText, text, 100); // Call the typewriter function with speed 100ms
