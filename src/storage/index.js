import Realm from 'realm';
import { constants } from '../constants';
import user1 from './User'
import userSchema from './user_schema';

const DB_OPTIONS = {
  path: constants.dbPath,
  schema: [userSchema.SCHEMA],
  schemaVersion: 0,
};

/**
 * @returns Promise<Realm>
 */
function getInstance() {
  return Realm.open(DB_OPTIONS);
}


async function setlocalstorage(resp) {
  const realm = await Realm.open({
      path: constants.dbPath,
      schema: [user1.SCHEMA],
  });    
  realm.write(() => {
      realm.deleteAll();
      realm.create("Profile", resp);
  });
  console.log("done");
  const tasks = realm.objects("Profile");
  console.log(`The lists of tasks are: ${JSON.stringify(tasks, null, 2)}`);
  console.log(`The lists of tasks are: ${tasks.map((task) => task.canonical_user_id)}`);
  return (tasks);
}



export  {
  getInstance,
  setlocalstorage,

  // schemas
  userSchema,
  user1,
};
