// Import the ClassRoom class
import ClassRoom from './0-classroom';

// Define and export the initializeRooms function
function initializeRooms() {
  const object1 = new ClassRoom(19);
  const object2 = new ClassRoom(20);
  const object3 = new ClassRoom(34);
  const list = [object1, object2, object3];
  return list;
}
export default initializeRooms;
