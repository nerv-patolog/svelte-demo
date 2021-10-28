import ChapterZero from '../chapters/ChapterZero.svelte';
import ChapterOne from '../chapters/ChapterOne.svelte';
import ChapterTwo from '../chapters/ChapterTwo.svelte';
import ChapterThree from '../chapters/ChapterThree.svelte';

export default (id) => {
    switch (id) {
        case 1:
            return ChapterOne;
        case 2:
            return ChapterTwo;
        case 3:
            return ChapterThree;
        case 4:
            return '';
        case 5:
            return '';
        case 6:
            return '';
        case 7:
            return '';
        case 8:
            return '';
        case 9:
            return '';
        case 10:
            return '';
        case 11:
            return '';
        case 12:
            return '';
        default:
            return ChapterZero;
    }
};