function getSecondLargest(nums) {
    let largest=nums[0];
    let second_largest;
    for (let i=0; i<nums.length; i++){
        if(nums[i] > largest){
            second_largest=largest;
            largest=nums[i];
        }
        if(nums[i] < largest && nums[i] > second_largest){
            second_largest=nums[i];
        }
    }
    return second_largest
}
