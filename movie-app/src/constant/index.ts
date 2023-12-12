const MOVIE_LIST = [
    'Inception',
    'test',
    'bollywood',
    'hollywood',
    'hero',
    'dream',
    'night',
    'love',
    'hero',
    'super',
    'most',
    'top',
    'new',
    'old'
]

export const getRandomMovie = () => {
    const randomIndex = Math.floor(Math.random() * MOVIE_LIST.length);
    return MOVIE_LIST[randomIndex];
};
