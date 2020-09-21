import { getGifs } from '../../helpers/getGifs';

describe('Tests into getGifs fetch', () => {
    
    test('should get 10 elements', async() => {
        
        const gifs = await getGifs('One Punch');
        expect( gifs.length ).toBe( 10 );

    });

    test('should get 0 elements if It don`t have props', async() => {
        
        const gifs = await getGifs('');
        expect( gifs.length ).toBe( 0 );

    });

});