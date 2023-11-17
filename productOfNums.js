function product(nums, index = 0) {
  if (index === nums.length) return 1;
  return nums[index] * product(nums, index + 1);
}
