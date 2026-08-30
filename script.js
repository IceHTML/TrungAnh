// Hàm phát nhạc khi rê chuột vào hình ảnh
function playPreview(element) {
    const audio = element.querySelector('audio');
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}

// Hàm dừng nhạc khi di chuột ra khỏi hình ảnh
function stopPreview(element) {
    const audio = element.querySelector('audio');
    if (audio) {
        audio.pause();
    }
}
