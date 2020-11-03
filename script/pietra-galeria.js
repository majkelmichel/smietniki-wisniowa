const image = $('#pietro')[0];

const imageSources = ['parter.svg', 'piętro1.svg', 'piętro2.svg', 'piętro3.svg', 'piętro4.svg']

const changeImage = (num) => {
    image.src = `img/${imageSources[num]}`;
}