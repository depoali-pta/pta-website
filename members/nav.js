// injects navbar dynamically into any file
fetch('../nav.html')
.then(response => response.text())
.then(data => {
    document.getElementById('nav').innerHTML = data
    document.getElementById('logo').href = "../"
})