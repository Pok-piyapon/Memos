// Input Create
const fileInput = (SetFile) => {
    const file = document.createElement("input")
    file.setAttribute("type", "file")
    file.onchange = async () => {
        const data = await base64(file.files[0])
        SetFile(data)
    }
    file.click()
}

// Convert a file to base64
const base64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(false)
})

export { fileInput , base64 }

