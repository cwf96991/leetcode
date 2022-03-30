/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 * https://leetcode.com/problems/design-parking-system/
 */
 var map ={}
 var ParkingSystem = function(big, medium, small) {
     map= {'1':big,'2':medium,'3':small}
 };
 
 /** 
  * @param {number} carType
  * @return {boolean}
  */
 ParkingSystem.prototype.addCar = function(carType) {
     map[carType] = map[carType]-1
    return map[carType] >=0
 };
 
 /** 
  * Your ParkingSystem object will be instantiated and called as such:
  * var obj = new ParkingSystem(big, medium, small)
  * var param_1 = obj.addCar(carType)
  */