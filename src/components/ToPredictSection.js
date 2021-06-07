import React, { useEffect } from 'react'

const ToPredictSection = ({ setPredictedImage }) => {

    useEffect(() => {
        const dropArea = document.getElementById('drop-area');

        ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false)
        })
        ;['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, highlight, false)
        })

        ;['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, unhighlight, false)
        })

        dropArea.addEventListener('drop', handleDrop, false)
    }, []);

    function preventDefaults (e) {
        e.preventDefault()
        e.stopPropagation()
    }

    function highlight(e) {
        const dropArea = document.getElementById('drop-area');
        dropArea.classList.add('highlight')
    }

    function unhighlight(e) {
        const dropArea = document.getElementById('drop-area');
        dropArea.classList.remove('highlight')
    }
      

    function handleDrop(e) {
        let dt = e.dataTransfer
        let file = dt.files[0]
        uploadFile(file)
    }

    function handleFiles(event) {
        let file = event[0]
        uploadFile(file)
    }
      
    async function uploadFile(file) {
        let url = "http://127.0.0.1:10000/predict";
        url = "http://34.78.246.84:10000/predict";
        let formData = new FormData()
        formData.append('file', file)
        
        const res = await fetch(url, {
            method: 'POST',
            body: formData
        }).then(response => response.blob())
        .then(blob => {
          const objectURL = URL.createObjectURL(blob);
          setPredictedImage(objectURL);
        });
    }

    return (
        <div id='drop-area'>
            <form className="my-form">
                <p>Upload file with the file dialog or by dragging and dropping the image onto the dashed region</p>
                <input type="file" id="fileElem" accept="image/*" onChange={handleFiles} />
                <label className="button" htmlFor="fileElem">Upload file</label>
            </form>
        </div>
    )
}

export default ToPredictSection
