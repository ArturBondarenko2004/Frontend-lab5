
const heightSlider = document.getElementById('heightSlider');
const widthSlider = document.getElementById('widthSlider');
const rotateSlider = document.getElementById('rotateSlider');
const heightValueLabel = document.getElementById('heightValueLabel');
const widthValueLabel = document.getElementById('widthValueLabel');
const rotateValueLabel = document.getElementById('rotateValueLabel');

const box = document.querySelector('.box');

heightSlider.addEventListener('input', size);
widthSlider.addEventListener('input', size);
rotateSlider.addEventListener('input', rotate);

function size() {
  const heightValue = heightSlider.value;
  const widthValue = widthSlider.value;
  heightValueLabel.textContent = heightValue;
  widthValueLabel.textContent = widthValue;

  const heightValueInPix = heightValue + 'px';
  const widthValueInPix = widthValue + 'px';
  box.style.height = heightValueInPix;
  box.style.width = widthValueInPix;

  const originX = widthValue / 2 + 'px';
  const originY = heightValue / 2 + 'px';
  box.style.transformOrigin = `${originX} ${originY}`;
}

function rotate() {
  const rotateValue = rotateSlider.value;
  rotateValueLabel.textContent = rotateValue;
  const rotateValueDeg = rotateValue + 'deg';
  box.style.transform = `rotate(${rotateValueDeg})`;
}

size();
rotate();