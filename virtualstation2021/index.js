import { performanceData } from './data.js';
import Performance from './performance.js';

const $performance = document.querySelector('.performance');
console.log($performance);
Performance(performanceData, $performance);
