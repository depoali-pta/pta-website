console.log('script fired')

const res = await fetch('https://meeting-updater.vercel.app/', {
    headers: {
       "Access-Control-Allow-Origin": "*"
    }
})
const url = await res.json()
console.log(url)
if (url.includes('riki-pedia')) {
    document.getElementById('live-meeting-bar').style = "display: none;"
} else {
    document.getElementById('live-meeting-bar').style = "display: flex;"
    document.getElementById('meeting-join-link').href = url.replace(/"/g, '')
    console.log("link updated")
}