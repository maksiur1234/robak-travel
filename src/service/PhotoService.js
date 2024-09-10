export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: 'https://storage.googleapis.com/etravify-prod-le9ohl2h/egipt_4_b397a97b60.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
                alt: 'Description for Image 1',
                title: 'Egipt'
            },
            {
                itemImageSrc: 'https://s1.1zoom.me/b8048/487/Sky_Evening_France_Eiffel_Tower_Paris_From_above_520603_1920x1080.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria2s.jpg',
                alt: 'Description for Image 2',
                title: 'Francja'
            },
            {
                itemImageSrc: 'https://s1.1zoom.me/b5145/19/Bridges_Rivers_Evening_Rome_Italy_554102_1920x1080.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria3s.jpg',
                alt: 'Description for Image 3',
                title: 'Węgry'
            },
            {
                itemImageSrc: 'https://s1.1zoom.me/b5050/289/Spain_Houses_Coast_Calpe_Crag_Trees_579469_1920x1080.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria4s.jpg',
                alt: 'Description for Image 4',
                title: 'Chorwacja'
            },
            {
                itemImageSrc: 'https://s1.1zoom.me/b5050/260/342737-svetik_1920x1080.jpg',
                thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria5s.jpg',
                alt: 'Description for Image 5',
                title: 'Włochy'
            },
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

