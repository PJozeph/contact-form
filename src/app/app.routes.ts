import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('src/app/contact-form/contact-form.routes').then(m => m.formRoutes),
    },
];
