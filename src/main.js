import './assets/main.css';
import './index.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';

import Menubar from 'primevue/menubar';
import Toast from 'primevue/toast';
import Card from 'primevue/card';
import Galleria from 'primevue/galleria';
import Button from 'primevue/button';
import Fieldset from 'primevue/fieldset';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup'; 
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import AnimateOnScroll from 'primevue/animateonscroll';
import FocusTrap from 'primevue/focustrap';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import Checkbox from 'primevue/checkbox';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';


import 'primevue/resources/themes/aura-light-amber/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import ToastService from 'primevue/toastservice';

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.directive('animateonscroll', AnimateOnScroll);
app.directive('focustrap', FocusTrap);

app.component('Menubar', Menubar);
app.component('Toast', Toast);
app.component('Card', Card);
app.component('Galleria', Galleria);
app.component('Button', Button);
app.component('Fieldset', Fieldset);
app.component('Avatar', Avatar);
app.component('AvatarGroup', AvatarGroup);
app.component('InputText', InputText);
app.component('FloatLabel', FloatLabel);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('TriStateCheckbox', TriStateCheckbox);
app.component('Checkbox', Checkbox);
app.component('Carousel', Carousel);
app.component('Tag', Tag);
app.mount('#app');
