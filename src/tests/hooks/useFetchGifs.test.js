import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Tests in hook useFetchGigs', () => {
    
    test('should  return the initial state', () => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;
        
        expect( data ).toEquals([]);
        expect( loading ).toBe(false);

    });

});