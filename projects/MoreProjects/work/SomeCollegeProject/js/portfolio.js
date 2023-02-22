// 1. In the root folder of your project, add a folder named 'js'
// 2. Inside the 'js' folder, create a file named 'portfolio.js'
// 3. Import 'portfolio.js` into each of your HTML files
// 4. Write a variable named 'footerMessage' and set it equal to the following string: 'This page was built using: '
// 5. On the following line, console.log the 'footerMessage`
// 6. Write a variable named 'languagesArray' and set it equal to an array containing the words 'HTML', 'CSS', 'JavaScript'
// 7. On the following line, console.log the 'languagesArray'
// 8. Write a variable named 'GITHUB_URL' and set it equal to the string https://api.github.com/users/
// 9. Write a variable named 'GITHUB_USERNAME' and set it equal to a string containing your GitHub username
// 10. Write a variable named 'githubInfo' and set it equal to the result of string concatenation to combine GITHUB_URL and GITHUB_USERNAME; on the following line, console.log the 'githubInfo'
// 11. Open up your index.html page in the browser, then open the inspector and look at the console tab; you should see all your console logs, including your GitHub domain name that you saved as 'githubInfo'
// 12. Copy your GitHub domain name from the console, paste it into a browser URL, and hit enter; you should see your Github information in the browser;
// what JavaScript data type does this look like? -> JSON (javascript object notation)

const footerMessage = 'This page was built using: '
console.log(footerMessage)

const languagesArray = ['HTML', 'CSS', 'JavaScript']
console.log(languagesArray.join(', '))

const GITHUB_URL = 'https://api.github.com/users/'
const GITHUB_USERNAME = 'A-Makeyev'

const githubInfo = GITHUB_URL + GITHUB_USERNAME
console.log(githubInfo)

// 1. Write a fetch request that sends a request to the domain name for your Github account that you saved to a variable in a previous assignment
// 2. Change the code so that it displays on your home page the photo from your Github fetch request
// 3. Change of the title on your homepage so that it displays your profile name fetched from your Github account instead of hardcoding your name.
// 4. Complete this assignment using only one fetch request

const profile = document.querySelector('.profile')

function fetchProfile() {
    // fetch only in home screen
    if (window.location.href.split('/')[3] === '' || window.location.href.includes('index.html')) {
        profile.innerHTML = 'Loading...'

        fetch(githubInfo)
        .then(res => res.json())
        .then(data => {
            profile.innerHTML = 
            `
                <img src="${data.avatar_url}" alt="${data.login}" style="width: 300px; height: 300px;">
                <h1 style="text-align: center;">${data.name}</h1>
            `
        })
    }
}
fetchProfile()


// 1. On your Contact page, the submit button should not be functional and look disabled as long as the required fields are not filled in.
// 2. When all the required fields are filled in, the submit button should become enabled and look enabled.
// 3. Use JavaScript, HTML, and CSS to achieve this.


// 1. In your 'portfolio.js' file, get each element from your form using its id and save the element to a variable;
// choose intuitive variable names, which can be the same as the id you gave them (e.g.,'firstName , 'submitButton')

// 2. Add an event listener to your button and write the shell for a function for your event listener

// 3. Inside the function for your event listener, console log the details entered into the form in the following format:
// First Name : _, Last Name: _, Email: __, Comment: __, Your Input: ___. Replace 'Your Input' with a name corresponding to what you actually choose to implement.


const validComment = /^(?!\s*$).+/
const validPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
const validName = /^[^0-9.,_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const input = document.querySelector('.form-container input')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const comment = document.getElementById('comment')
const submit = document.getElementById('submit')

// initialize submit button to be disabled
if (submit !== null) submit.style.cursor = 'not-allowed'

function validate(input, regex) {
    // if input element exists
    if (input !== null) { 
        input.addEventListener('input', (event) => {
            if (event.target.value.match(regex)) {
                input.style.border = '2px solid green'
            } else {
                input.style.border = '2px solid red'
            }

            if (!firstName.value.match(validName) || !lastName.value.match(validName) || !email.value.match(validEmail) || !phone.value.match(validPhone) || !comment.value.match(validComment)) {
                submit.style.cursor = 'not-allowed'
                submit.setAttribute('disabled', '')
                submit.removeEventListener('click', submitForm)
            } else {
                submit.style.cursor = 'pointer'
                submit.removeAttribute('disabled')
                submit.addEventListener('click', submitForm)
            }
        })
    }
}

function submitForm() {
    console.log(`First Name: ${firstName.value}, Last Name: ${lastName.value}, email: ${email.value}, Phone: ${phone.value}, Comment: ${comment.value}.`)
    document.querySelector('.contact-form').reset()
}

validate(firstName, validName)
validate(lastName, validName)
validate(email, validEmail)
validate(phone, validPhone)
validate(comment, validComment)


// 1. On your About page, add two buttons below the map: 'Previous' and 'Next'.
// Clicking the 'Next' button should change the pointer to the next city listed on your about page (i.e. a city you have lived in or want to visit).

// 2. When the first of the series of locations is selected, the 'Previous' button should disappear,
// and when the last location is selected, the 'Next' button should disappear. Otherwise, both buttons should be visible.

// 3. One limitation is that you should do this with only one iframe element in your HTML file.

// 4. The sentence in your footer that says "This page was built using: HTML, CSS and JavaScript"
// should not be hardcoded. Instead, the sentence should come from your portfolio.js file.
// Refactor the code so that the words "HTML", "CSS", "JavaScript" are stored in an array and generated on the website. Use the variables you already made!

// 5. Write the code that generates your footer sentence so that adding a new word to your array
// results in the word and still appearing before the last item in your sentence (and without having "and" in your array).


const locations = [
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44180.523988245506!2d6.14303885!3d46.20483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c650693d0e2eb%3A0xa0b695357b0bbc39!2sGeneva%2C%20Switzerland!5e0!3m2!1sen!2sil!4v1670417395178!5m2!1sen!2sil',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93121.27036799645!2d131.88341837634385!3d43.16669084656954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb39cba5249d485%3A0x186704d4dd967e35!2sVladivostok%2C%20Primorsky%20Krai%2C%20Russia!5e0!3m2!1sen!2sil!4v1670417645013!5m2!1sen!2sil',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63466.96659162467!2d35.70139091396772!3d-6.172857457183181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184de55feeaa7ec9%3A0x8040bf1262e19cee!2sDodoma%2C%20Tanzania!5e0!3m2!1sen!2sil!4v1670417711622!5m2!1sen!2sil'
]

const map = document.getElementById('map')
const nextLocation = document.getElementById('next-location')
const previousLocation = document.getElementById('previous-location')

// initialize the maps index
var currentLocationIndex = 0
if (map !== null) {
    map.src = locations[currentLocationIndex]
}

// track the current location and display the next & previous buttons accordingly
function displayButtons() {
    if (currentLocationIndex === locations.length - 1) {
        nextLocation.style.display = 'none'
    } else {
        nextLocation.style.display = 'inline-block'
    }

    if (currentLocationIndex === 0) {
        previousLocation.style.display = 'none'
    } else {
        previousLocation.style.display = 'inline-block'
    }
}

if (nextLocation !== null && nextLocation !== null) {
    displayButtons()

    nextLocation.addEventListener('click', () => {
        if (currentLocationIndex != locations.length - 1) currentLocationIndex++
        displayButtons()
        map.src = locations[currentLocationIndex]
    })

    previousLocation.addEventListener('click', () => {
        if (currentLocationIndex != 0) currentLocationIndex--
        displayButtons()
        map.src = locations[currentLocationIndex]
    })
}

const footerText = document.querySelector('footer h3')

function addWordToFooter(word) {
    languagesArray.push(word)
    footerText.textContent = footerMessage + languagesArray.join(', ')
}   

footerText.textContent = footerMessage + languagesArray.join(', ')
setTimeout(() => {
    addWordToFooter('React')
}, 5000)
