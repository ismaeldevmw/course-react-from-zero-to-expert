import { getUser } from '../../bases/05-functions';
import { getActiveUser } from '../../bases/05-functions';

describe('Tests into 05-functions', () => {
  
  test('getUser should return an object', () => {
    
    const userTest = {
      uid: 'ABC123',
      userName: 'El_Papi123'
    }

    const user = getUser();

    expect( user ).toEqual( userTest );

  });

  test('getActiveUser should return an object', () => {    
    
    const userName = 'Balachvinic';
    const user = getActiveUser(userName);

    expect( user ).toEqual({
      uid: 'ABC345',
      userName: userName
    });

  });
});