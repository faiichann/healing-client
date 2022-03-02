import { goalItem }from 'api/mocks/selcetItems'

function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
    if (argument === undefined || argument === null) {
      throw new TypeError(message);
    }
    return argument;
  }

const formatMonster = (type : string) => ensure(goalItem.find(item => type === item.goal)).character

export default formatMonster