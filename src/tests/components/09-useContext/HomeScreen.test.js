import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests in <HomeScreen />', () => {
    
    const user = {
        name: 'Ismael',
        email: 'ismael@gmail.com'
    }
    
    const wrapper = mount( 
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen /> 
        </UserContext.Provider> 
    );
    
    test('should display correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

});
