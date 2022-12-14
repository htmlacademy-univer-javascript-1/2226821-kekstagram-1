const imgUploadPreview = document.querySelector('.img-upload__preview');
const imgUploadScale = document.querySelector('.img-upload__scale');
const scaleControlSmaller = imgUploadScale.querySelector('.scale__control--smaller');
const scaleControlValue = imgUploadScale.querySelector('.scale__control--value');
const scaleControlBigger = imgUploadScale.querySelector('.scale__control--bigger');

let scale = parseInt(scaleControlValue.value.replace('%', ''), 10);

const transformScale = (sc) => {
    scaleControlValue.value = `${scale}%`;
    imgUploadPreview.style = `transform: scale(${scale / 100})`;
}

const upScale = () => {
    scale + 25 <= 100 ? scale += 25 : scale = 100;
    transformScale(scale);
};

const downScale = () => {
    scale - 25 < 25 ? scale = 25 : scale -= 25;
    transformScale(scale);
};

scaleControlBigger.addEventListener('click', upScale);
scaleControlSmaller.addEventListener('click', downScale);

export { scaleControlValue };
