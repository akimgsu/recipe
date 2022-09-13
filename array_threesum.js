
/*
15 3sum. 
https://leetcode.com/problems/3sum/
https://www.youtube.com/watch?v=K8bmvM2_ZZQ&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=2
*/
const helper = (j, t, nums) => {
    let k = nums.length - 1;
    let res = [];
    while (j < k) {
        const l = nums[j];
        const r = nums[k];
        if (l + r > t) {
            k -= 1;
        } else if (l + r < t) {
            j += 1;
        } else {
            res.push([t * -1, l, r]);
            while (j < k && nums[j] === nums[j + 1]) j += 1;
            while (j < k && nums[k] === nums[k - 1]) k -= 1;
            j += 1;
            k -= 1;
        }
    }
    return res;
}
const threeSumZero = (nums) => {
    const res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        const t = nums[i] * -1;
        const subRes = helper(i + 1, t, nums);
        res.push(subRes);
    }
    return res;
}
console.log('threeSumZero:', threeSumZero([-1, 0, 1, 2, -1, -4]))


/*
259. 3Sum Smaller
https://www.lintcode.com/problem/918/
*/
const threeSumSmaller = (nums, t) => {
    let total = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            if (nums[l] + nums[r] + nums[i] >= t) {
                r--;
            } else {
                total += r - l;
                l++;
            }
        }
    }
    return total;
}
// console.log('threeSumZero:', threeSumSmaller([-2, 0, -1, 3], 2))
// console.log('threeSumZero:', threeSumSmaller([1, 2, 3, 4, 5], 9));

/*
259. 3Sum closest
https://leetcode.com/problems/3sum-closest/
*/
const threeSumClosest = (nums, t) => {
    nums.sort((a, b) => a - b);
    let c = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum < t) {
                l++;
            } else if (sum > t) {
                r--;
            } else {
                return sum;
            }
            if (Math.abs(sum - t) < Math.abs(c - t)) c = sum;
        }
    }
    return c;
}
// console.log(threeSumClosest([-1, 2, 1, -4], 1));
// console.log(threeSumClosest([1, 1, 1, 0], -100));
// console.log(threeSumClosest([1, 1, -1], 2));
/*
18. 4Sum
https://leetcode.com/problems/4sum/
*/
const sum4Target = (nums, t) => {
    if (nums.length < 4) return [];
    const result = [];
    let len = nums.length;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > t) break;
        if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < t) continue;
        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > t) break;
            if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < t) continue;
            let l = j + 1;
            let r = len - 1;
            while (l < r) {
                sum = nums[i] + nums[j] + nums[l] + nums[r];
                if (sum < t) {
                    l++;
                } else if (sum > t) {
                    r--;
                } else {
                    result.push([nums[i], nums[j], nums[l], nums[r]]);
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    while (l < r && nums[r] === nums[r - 1]) r--;
                    l++;
                    r--;
                }
            }
        }
    }
    return result;
}
// console.log("test:", sum4Target([1, 0, -1, 0, -2, 2], 0))
/*
3sum Target 
*/
const sum3Target = (nums, t) => {
    const result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1
        let r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum > t) {
                r--;
            } else if (sum < t) {
                l++;
            } else {
                result.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            }
        }
    }
    return result;
}
// console.log(sum3Target([-1, 0, 1, 2, 3], 3))

/*
https://leetcode.com/problems/two-sum/
*/
const twoSumHash = (nums, t) => {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        hash[val] = i
    }
    for (let i = 0; nums.length; i++) {
        const pk = t - nums[i];
        if (hash[pk] && hash[pk] !== i) {
            return [i, hash[pk]];
        }
    }
}
const twoSumPointers = (nums, t) => {
    nums.sort((a, b) => a - b);
    let len = nums.length - 1, l = 0, r = len;
    while (l < r) {
        if (nums[l] + nums[r] === t) {
            return [nums[l], nums[r]];
        }
        if (nums[l] + nums[r] < t) {
            l++;
        } else {
            r--;
        }
    }
}
const twoSum = (nums, t) => {
    const len = nums.length - 1;
    for (let i = 0; i <= len; i++) {
        if (nums[i] + nums[len] === t) return [nums[i], nums[len]]
    }
}
// console.log('twoSumHash::', twoSumHash([2, 7, 11, 15], 9));
// console.log('twoSumPointers::', twoSumPointers([2, 7, 11, 15], 9));
// console.log('twoSum::', twoSum([3, 2, 4], 6));

/*
259. 3Sum Smaller
16. 3Sum closest
18. 4Sum
*/


