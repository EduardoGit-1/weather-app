import { useResizeDetector } from 'react-resize-detector';
import { useCallback } from 'react';
const SomeComponent = ({}) => {
    const onResize = useCallback((width) => {
        console.log(width)

        // console.log(text_w)
      }, []);
    const { width, height, ref } = useResizeDetector({onResize});

    return (<div class ="some-component-test" ref={ref}>{`${width}x${height}`}</div>);
}


export default SomeComponent