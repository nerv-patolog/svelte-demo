import ChapterZero from '../chapters/ChapterZero.svelte';
import ChapterOne from '../chapters/ChapterOne.svelte';
import ChapterTwo from '../chapters/ChapterTwo.svelte';
import ChapterThree from '../chapters/ChapterThree.svelte';
import ChapterFour from '../chapters/ChapterFour.svelte';
import ChapterFive from '../chapters/ChapterFive.svelte';
import ChapterSix from '../chapters/ChapterSix.svelte';
import ChapterSeven from '../chapters/ChapterSeven.svelte';
import ChapterEight from '../chapters/ChapterEight.svelte';
import ChapterNine from '../chapters/ChapterNine.svelte';
import ChapterTen from '../chapters/ChapterTen.svelte';

export default (id) => {
    switch (id) {
        case 1:
            return ChapterOne;
        case 2:
            return ChapterTwo;
        case 3:
            return ChapterThree;
        case 4:
            return ChapterFour;
        case 5:
            return ChapterFive;
        case 6:
            return ChapterSix;
        case 7:
            return ChapterSeven;
        case 8:
            return ChapterEight;
        case 9:
            return ChapterNine;
        case 10:
            return ChapterTen;
        case 11:
            return '';
        case 12:
            return '';
        default:
            return ChapterZero;
    }
};
