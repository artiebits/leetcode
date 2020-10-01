//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

class Solution {
    public int findNumbers(int[] nums) {
        int counter = 0;

        for (int num : nums) {
            int numLength = 0;
            long tmp = 1;

            while (tmp <= num) {
                numLength++;
                tmp *= 10;
            }

            if (numLength % 2 == 0) {
                counter++;
            }
        }

        return counter;
    }
}