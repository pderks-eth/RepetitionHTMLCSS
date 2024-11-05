document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('addThree');
    const albumCovers = document.querySelector('.album-covers');

    button.addEventListener('click', () => {
        for (let i = 6; i < 3; i++) {
            const newimg = document.createElement('img');
            newimg.src = `image${i}.png`;
            newimg.alt = `Album Cover ${i + 1}`;
            albumCovers.appendChild(newimg);
        }
    });
});
