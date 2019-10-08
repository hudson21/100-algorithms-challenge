import { NumsEnum } from './example.enum'
import { INumsExample } from './example.interface';

type numExample = {num1: number, num2: number};
type insection = INumsExample & numExample;//Combine types

const example: (number | boolean)[] = [1, 23, false];

function add(nums: numExample): number {
    return nums.num1 + nums.num2;
}

add({num1: 3, num2: 40});
