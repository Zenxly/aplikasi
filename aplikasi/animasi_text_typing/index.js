function typeText(textArray, typingTextElement, speed, index = 0, text = '') {
  if (index < textArray[0].length) {
    text += textArray[0].charAt(index);
    typingTextElement.innerHTML = text;
    index++;
    setTimeout(() => typeText(textArray, typingTextElement, speed, index, text), speed);
  } else if (index === textArray[0].length) {
    setTimeout(() => deleteText(textArray, typingTextElement, speed, index, text), speed);
  }
}

function deleteText(textArray, typingTextElement, speed, index = textArray[0].length, text = textArray[0]) {
  if (index >= 0) {
    text = text.substring(0, index);
    typingTextElement.innerHTML = text;
    index--;
    setTimeout(() => deleteText(textArray, typingTextElement, speed, index, text), speed);
  } else {
    if (textArray.length > 1) {
      textArray.shift();
      setTimeout(() => typeText(textArray, typingTextElement, speed), speed);
    } else {
      textArray = [...textArray[0].split('')];
      setTimeout(() => typeText(textArray, typingTextElement, speed), speed);
    }
  }
}

const typingTextElement = document.getElementById('typing-text');
const textArray = ['Selamat Datang', 'Apakah ada yang bisa kami bantu?'];
const speed = 100; // waktu jeda antar karakter dalam milidetik

setTimeout(() => typeText(textArray, typingTextElement, speed), speed);
