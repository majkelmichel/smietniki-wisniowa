const image = $('#pietro')[0];

const imageSources = ['parter', 'pietro1', 'pietro2', 'pietro3', 'pietro4']

const changeImage = (num) => {
    image.src = `imgpng/${imageSources[num]}.png`;
    switch(num) {
        case 0:
            image.useMap = '#parterMap';
            break;
        case 1:
        case 2:
        case 3:
        case 4:
            image.useMap = `#pietro${num}Map`;
            break;
        default:
            console.error('Wrong parameter num for function changeImage');
            break;
    }
}
