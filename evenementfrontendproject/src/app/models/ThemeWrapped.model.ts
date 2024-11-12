import {Theme} from './theme.models';

export class ThemeWrapper{
    //pour suivre le format qui j'ai recoive de mon sping data rest
    _embedded!: {themes: Theme[]};
}