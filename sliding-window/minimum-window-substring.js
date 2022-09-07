/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// check if t longer than s return ""
// need use array to store the result
// create a frequency map for t
//once hit the same map slide the window until hit the substring.
//keep increasing the window until match the map or larger than the old result
//if larger than the old result then slide again and loop
var minWindow = function (s, t) {
  const isInvalid = t.length > s.length;
  if (isInvalid) return false;
  let [left, right] = [0, 0];
  let minArr = new Array(s.length).fill(0);
  const [sFrequencyMap, tFrequencyMap] = getFrequencyMaps(t);

  while (right < s.length) {
    addRightFrequency(s, right, sFrequencyMap);
    if (isContain(sFrequencyMap, tFrequencyMap)) {
      s.substring(left, right);
    }
    right++;
  }
  return minArr == Array(s.length).fill(0) ? "" : minArr.join("");
};

const getFrequencyMaps = (s2) => {
  const [s1FrequencyMap, s2FrequencyMap] = new Array(2)
    .fill()
    .map(() => new Array(26).fill(0));

  for (const char of s2) s2FrequencyMap[getCode(char)]++;

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

const isContain = (a, b) => {
  for (let i = 0; i < 26; i++) {
    const isMatch = a[i] <= b[i];
    if (!isMatch) return false;
  }

  return true;
};
