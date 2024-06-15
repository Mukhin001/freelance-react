// проверяет какая в системе стоит тема (например в телефоне темная или светлая и
// исхоя из этого сразу открывает сайт в темной или светлой теме)

export const detectDarkMood = () => {
    if(window.matchMedia && 
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        return 'dark'
    } 
    return 'light'
};