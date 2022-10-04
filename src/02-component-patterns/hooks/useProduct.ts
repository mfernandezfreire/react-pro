import { useState } from 'react';
import { Product, onChangeArgs, initialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: initialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {


    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    // const isMounted = useRef(false);

    console.log(initialValues, counter);

    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0);
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }
        setCounter(newValue);
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset
    }
}
