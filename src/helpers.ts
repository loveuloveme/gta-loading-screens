/* eslint-disable import/prefer-default-export */
export const preloadImages = (imgs: string[] | string) => {
    const fetchImg = (url: string) => new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = url;

        img.onload = () => resolve();
        img.onerror = () => reject();
    });

    if (Array.isArray(imgs)) {
        return Promise.allSettled(imgs.map((url) => fetchImg(url)));
    }

    return fetchImg(imgs);
};
