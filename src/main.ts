import { createApp } from 'vue'
import App from './App.vue'

// import and register other components from library
import PrimeVue from "primevue/config"; // primevue config
import InputText from "primevue/inputtext";
import Button from 'primevue/button';
import Listbox from 'primevue/listbox';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

// import css dependencies
import 'primevue/resources/primevue.min.css'                 //core css
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css';                            //primeflex

const app = createApp(App);
app.use(PrimeVue);

app.component("InputText", InputText);
app.component("Button", Button);
app.component("Listbox", Listbox);
app.component("Dialog", Dialog);
app.component("Dropdown", Dropdown);
app.component("DataTable", DataTable);
app.component("Column", Column);


app.mount("#app");
