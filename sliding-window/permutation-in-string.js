/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//remark need check if s2 length is greater than s1 length
// iterate over s1 to create the frequency map
//iterate s2 to create the frequency map 
//add s2 in to frequency map until window size is equal to s1 length and if frequency map does not match then slide

//if window size == s1.length && frequency map of s1 and s2 are the same return true

var checkInclusion = function (s1, s2) {
  const isInvalid = s2.length < s1.length;
  if (isInvalid) return false;

  let [left, right] = [0, 0];
  const [s1FrequencyMap, s2FrequencyMap] = getFrequencyMaps(s1);
  while (right < s2.length) {
    addRightFrequency(s2, right, s2FrequencyMap);
    let window = right - left + 1;
    let isPermutation =
      window === s1.length && isSame(s1FrequencyMap, s2FrequencyMap);
    if (isPermutation) return true;

    let canSlide = s1.length <= window;
    if (canSlide) {
      subtractLeftFrequency(s2, left, s2FrequencyMap);
      left++;
    }

    right++;
  }
  return false;
};

const getFrequencyMaps = (s1) => {
  const [s1FrequencyMap, s2FrequencyMap] = new Array(2)
    .fill()
    .map(() => new Array(26).fill(0));

  for (const char of s1) s1FrequencyMap[getCode(char)]++;

  return [s1FrequencyMap, s2FrequencyMap];
};

const getCode = (char) => char.charCodeAt(0) - "a".charCodeAt(0);

const addRightFrequency = (s, right, frequencyMap) => {
  const char = s[right];
  const index = getCode(char);

  frequencyMap[index]++;

  return frequencyMap[index];
};

const subtractLeftFrequency = (s, left, frequencyMap) => {
  const char = s[left];
  const index = getCode(char);

  frequencyMap[index]--;

  return frequencyMap[index];
};

const isSame = (a, b) => {
  for (let i = 0; i < 26; i++) {
    const isMatch = a[i] === b[i];
    if (!isMatch) return false;
  }

  return true;
};
