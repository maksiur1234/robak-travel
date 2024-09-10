export const ReviewService = {
    getReviews() {
        return [
            {
                id: '1',
                name: 'Jan Kowalski',
                title: 'Wspaniałe wakacje!',
                content: 'Miałem niesamowite doświadczenie z tym biurem podróży. Wszystko było doskonale zorganizowane.',
                rating: 5,
                date: '10 maja 2024',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Janusz_Kowalski_Sejm_2019.jpg/1200px-Janusz_Kowalski_Sejm_2019.jpg'
            },
            {
                id: '2',
                name: 'Anna Nowak',
                title: 'Super wycieczka!',
                content: 'Wszystko przebiegło zgodnie z planem, na pewno skorzystam ponownie!',
                rating: 4,
                date: '15 kwietnia 2024',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTviiTTkIHkk2PfxFZ2yA9CURwZPFUeij0RfA&usqp=CAU'
            },
            {
                id: '3',
                name: 'Piotr Zieliński',
                title: 'Doskonała obsługa',
                content: 'Bardzo miła obsługa i świetna organizacja wyjazdu. Polecam!',
                rating: 5,
                date: '20 marca 2024',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCNGcrK2Ai9c9fBy-dE8GOi-rv6lg2D6EKFA&usqp=CAU'
            },
            {
                id: '4',
                name: 'Agnieszka Kowalska',
                title: 'Najlepsza podróż!',
                content: 'Byłam zachwycona każdym aspektem mojej wycieczki. Gorąco polecam!',
                rating: 5,
                date: '5 maja 2024',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8trSGP7Z2X4h1EojkaN5-rp6CbbGyIFrENQ&usqp=CAU'
            },
            {
                id: '5',
                name: 'Michał Wiśniewski',
                title: 'Świetna organizacja',
                content: 'Wszystko było na najwyższym poziomie. Organizacja, atrakcje, przewodnicy - wszystko idealne.',
                rating: 4,
                date: '12 marca 2024',
                image: 'https://www.ebilet.pl/media/cms/media/ntsckoa5/michal_wisniewski.webp'
            },
            {
                id: '6',
                name: 'Ewa Nowicka',
                title: 'Polecam!',
                content: 'Wyjazd marzeń, który na długo zostanie w naszej pamięci.',
                rating: 5,
                date: '25 lutego 2024',
                image: 'https://cdn.medexpress.pl/media/images/uploads202201Ewa-Kraj.25c07c4e.fill-950x430.format-webp.webp'
            }
        ];
    },

    getReviewsData() {
        return Promise.resolve(this.getReviews());
    }
};
