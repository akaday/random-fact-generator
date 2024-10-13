async function getFact() {
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const data = await response.json();
        document.getElementById("fact").innerText = data.text;
    } catch (error) {
        document.getElementById("fact").innerText = "Could not fetch a fact at this time.";
    }
}
