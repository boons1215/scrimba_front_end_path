const url = "https://www.thecolorapi.com";
const endpoint = "/scheme?";
let colorSchemes = [];

// element
const colorInputEl = document.getElementById("seed-color");
const schemeEl = document.getElementById("color-scheme");
const formEl = document.getElementById("input-container");
const colorContainerEl = document.getElementById("color-container");
const hexContainerEl = document.getElementById("hex-container");
const submitBtn = document.getElementById("submit-button");

// render the html elements
function render() {
    for (let i = 0; i < colorSchemes.length; i++) {
        const hexValue = colorSchemes[i].hex.value;
        colorContainerEl.innerHTML += `
            <div class="color">
                <img src="${colorSchemes[i].image.bare}" />
                <p>${colorSchemes[i].name.value}</p>
                <button class="hex" id="${hexValue}" onclick="saveHex(this)">${hexValue}</button>
            </div>
        `;
    };
};

// click and save the hex of color
function saveHex(event) {
    const copyValue = event.getAttribute('id');
    navigator.clipboard.writeText(copyValue)
        .then(() => {
            alert("Copied the text: " + copyValue)
        })
        .catch(() => {
            alert("Copy failed")
        });
};

// update the selection query
function loadSelection() {
    // load default selection: black & monochrome
    let inputColor = colorInputEl.value.substring(1); // strip the leading #
    let inputScheme = schemeEl.options[schemeEl.selectedIndex].value;
    let data = {
        hex: inputColor,
        mode: inputScheme,
    };

    const arg = "hex=" + data.hex + "&mode=" + data.mode;

    fetch(url + endpoint + arg)
        .then(response => response.json())
        .then(data => {
            colorSchemes = data.colors;
            console.log(colorSchemes)
            
            render();
        });
};

// load default when the page open
loadSelection() ;

// submit button to update the selection
submitBtn.addEventListener("click", event => {
    event.preventDefault();
    colorContainerEl.innerHTML = "";
    loadSelection() ;
});


// Raw Data Ref:
// colors: (5) [{…}, {…}, {…}, {…}, {…}]
    // XYZ: {fraction: {…}, value: 'XYZ(0, 0, 0)', X: 0, Y: 0, Z: 0}
    // cmyk: {fraction: {…}, value: 'cmyk(NaN, NaN, NaN, 100)', c: null, m: null, y: null, …}
    // contrast: {value: '#ffffff'}
    // hex: {value: '#000000', clean: '000000'}
    // hsl: {fraction: {…}, h: 0, s: 0, l: 0, value: 'hsl(0, 0%, 0%)'}
    // hsv: {fraction: {…}, value: 'hsv(0, 0%, 0%)', h: 0, s: 0, v: 0}
    // image: {bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=000000', named: 'https://www.thecolorapi.com/id?format=svg&hex=000000'}
    // name: {value: 'Black', closest_named_hex: '#000000', exact_match_name: true, distance: 0}
    // rgb: {fraction: {…}, r: 0, g: 0, b: 0, value: 'rgb(0, 0, 0)'}
    // _embedded: {}
    // _links: {self: {…}}
    // [[Prototype]]: Object
// count: 5
// image: {bare: 'https://www.thecolorapi.com/scheme?format=svg&named=false&hex=000000&mode=monochrome&count=5', named: 'https://www.thecolorapi.com/scheme?format=svg&hex=000000&mode=monochrome&count=5'}
// mode: "monochrome"
// seed: {hex: {…}, rgb: {…}, hsl: {…}, hsv: {…}, name: {…}, …}
// _embedded: {}
// _links: {self: '/scheme?hex=000000&mode=monochrome&count=5', schemes: {…}}
// [[Prototype]]: Object