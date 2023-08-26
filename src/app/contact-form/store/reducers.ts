import { createFeature, createReducer, on } from '@ngrx/store';
import { ContactFormStateInterface } from '../types/form-state.interface';
import { contactFromAction } from './actions';

const initialState: ContactFormStateInterface = {
    isSubmitting: false,
    validationErrors: null,
};

const contactFormFeature = createFeature({
    name: 'contactForm',
    reducer: createReducer(
        initialState,
        on(contactFromAction.sendForm, state => ({ ...state, isSubmitting: true })),
        on(contactFromAction.formSentSuccess, state => ({ ...state, isSubmitting: false })),
        on(contactFromAction.formSentFailure, state => ({ ...state, isSubmitting: false }))

    ),
});

export const { name: contactFormFeatureKey, reducer: contactFormReducer, selectIsSubmitting } = contactFormFeature;
