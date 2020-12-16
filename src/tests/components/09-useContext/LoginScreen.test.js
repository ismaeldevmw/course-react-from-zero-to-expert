import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests in <LoginScreen />', () => {
    
    const setUser = jest.fn();

    const wrapper = mount( 
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen /> 
        </UserContext.Provider> 
    );

    test('should display correctly', () => {
        expect( wrapper ).toMatchSnapshot()
    });

    test('should execute setUser with its arguments hoped', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( setUser ).toHaveBeenCalledWith({
            id: 123,
            name: 'Ismael',
            email: 'ismael@gmail.com'
        });

    });
    
});
