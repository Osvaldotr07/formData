
const $form = document.querySelector('#form')

const $image = document.querySelector('#image')
const $file = document.querySelector('#file')
const $preview = document.querySelector('.preview')
const $closeButton = document.querySelector('.close-button')


const renderImage = (formData) => {
    const file = formData.get('image')
    const image = URL.createObjectURL(file)
    $image.setAttribute('src', image)
}

const $username = document.querySelector('#username')
const renderUsername = (formData) => {
    const username = formData.get('username')
    $username.textContent = username
}

$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    renderUsername(formData)
    renderImage(formData)

    let response = await fetch('/', {
        method:'POST',
        body: formData,
    })

    let responseJson = await response.json()

    if (response.ok){
        Swal.fire('Good', 'Everything Ok!', 'success')
    }
})

$file.addEventListener('change', () => {
    const formData = new FormData($form)
    $preview.classList.add('is-active')
    renderImage(formData)
})

$closeButton.addEventListener('click', () => {
    $preview.classList.remove('is-active')
})