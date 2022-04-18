async function getPhotos() {
    let response = await fetch("photos.json")
    let photos = await response.json()
    return photos
}

function getPhotosHtml(photos) {
    let myPhotosHtml = photos.map(photo => {
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}"/>`
    }).join('')

    return `<div class="my-photos">${myPhotosHtml}</div>`   
}

getPhotos().then(photos => {    
    document.body.innerHTML = `<div class="my-gallery">
        <img id="my-selected-photo" class="my-photo" id="my-selected-photo" src="https://picsum.photos/id/${photos[2].id}/200/200" />
        ${getPhotosHtml(photos)}
    </div>`    
    
    let myPhotoImgs = Array.from(document.getElementsByClassName("my-photo"))
    myPhotoImgs.forEach(photoImg => {
        photoImg.addEventListener("click", () => {
            let selectedPhotoSrc = `${photoImg.src.substr(0, photoImg.src.length - 7)}/300/300`

            let selectedPhoto = document.getElementById("my-selected-photo")

            selectedPhoto.src = selectedPhotoSrc
            selectedPhoto.style.display = "inline"
        })
    })
})