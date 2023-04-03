async function init() { // add async - import rust is async operation
    let rustApp = null;

    try {
        rustApp = await import('../pkg');
    }
    catch (e) {
        console.error(e);
        return
    }
    const input = document.getElementById('upload');
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
        let base64 = fileReader.result.replace(
            /^data:image\/(png|jpg|jpeg);base64,/, ''
        )
        // console.log("Javascript base64" + base64);
        // console.log(input.files[0]);

        let img_data_url = rustApp.grayscale(base64); // rustapp is rust module and grayscale is our fn
        document.getElementById('new-img').setAttribute(
            'src', img_data_url
        );
    }

    input.addEventListener('change', () => {
        fileReader.readAsDataURL(input.files[0]);
    })
}

init()