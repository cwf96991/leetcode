/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
//use the hash map to store the frequency of the string
// keep track of the window, use the window - the highest frequency , if the k higher then the result then the window is valid(no need slide)
// use longest = Math.max(longest, count); to keep track of the frequency of the string
//slide need reduce the frequency of the string and shift the index of the left and **update window size**

var characterReplacement = function (s, k) {
  let [left, right, longest, max] = new Array(4).fill(0);
  const frequencyMap = new Array(26).fill(0);
  while (right < s.length) {
    let count = addRightFrequency(s, right, frequencyMap);
    longest = Math.max(longest, count);
    let window = right - left + 1;
    let canSlide = k < window - longest;
    if (canSlide) {
        
        subtractLeftFrequency(s,left, frequencyMap);
        left++;
    }
    window = right - left + 1;
    max = Math.max(max,window);
    right++;
  }
  return max;
};

const addRightFrequency = (s, right, map) => {
  const char = s[right];
  const index = getCode(char);

  map[index]++;

  return map[index];
};

const subtractLeftFrequency = (s, left, map) => {
  const char = s[left];
  const index = getCode(char);

  map[index]--;

  return map[index];
};

const getCode = (char) => char.charCodeAt(0) - "A".charCodeAt(0);
