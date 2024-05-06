function uploadFile() {
    var formData = new FormData();
    var fileInput = document.getElementById('fileToUpload');
    formData.append('fileToUpload', fileInput.files[0]);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'upload.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('uploadStatus').innerHTML = 'File uploaded successfully.';
        } else {
            document.getElementById('uploadStatus').innerHTML = 'Error uploading file.';
        }
    };
    xhr.send(formData);
}
