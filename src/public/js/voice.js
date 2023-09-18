const searchInput = document.querySelector('search-input');

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'vi-VI';
recognition.continuous = false;

const microphone = document.querySelector('.microphone');

const handleVoice = (text) => {
    console.log('text', text);
    // const handleText = text.tolowerCase();
    // if(handleText.include('đồng hồ')) {
    //     const clock = handleText.split('của')[1].trim();
    //     console.log('clock', clock);
    //     searchInput.value = clock;
    // }
}

microphone.addEventListener('click', (e) => {
    e.preventDefault();
    recognition.start();
});

recognition.onspeechend = () => {
    recognition.stop();
}

recognition.onerror = (err) => {
    console.error(err);
}

recognition.onresult = (e) => {
    console.log('onresult', e);
    const text = e.results[0][0].transcript;
    // handleVoice(text);
    document.getElementById("search-input").value = text;
    document.getElementById("search").submit();

}