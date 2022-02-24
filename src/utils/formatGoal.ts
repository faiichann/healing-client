import { goalItem }from 'api/mocks/selcetItems'

function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
    if (argument === undefined || argument === null) {
      throw new TypeError(message);
    }
    return argument;
  }

const formatGoal = (type : string) => ensure(goalItem.find(item => type === item.goal)).img 
//  {
//     let result = goalItem.find(item => item.goal === type );
//     if (result === undefined) {
//         throw new TypeError('The value was promised to always be there!');
//       }

//     console.log(result);
//     const goalImg = result.img 
//     console.log(goalImg)
//     return goalImg
// }
export default formatGoal
