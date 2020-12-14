import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe('Tests in useCounter', () => {
    
    test('should return default values', () => {
        
        const { result } = renderHook( () => useCounter() );

        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrease ).toBe('function');
        expect( typeof result.current.reset).toBe('function');
    });

    test('should  increment counter by 1', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act( () => {
            increment();
        })

        const { counter } = result.current;
        expect( counter ).toBe(101)

    });

    test('should  decrease counter by 1', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { decrease } = result.current;

        act( () => {
            decrease();
        })

        const { counter } = result.current;
        expect( counter ).toBe(99)

    });


    test('should  reset the initial state', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { increment, reset } = result.current;

        act( () => {
            increment();
            reset();
        })

        const { counter } = result.current;
        expect( counter ).toBe(100)

    });

});