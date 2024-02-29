import MyComponent from "./MyComponent";
import MyComponentWithUpperCase from "./MyComponentWithUpperCase";

const HigherOrderComponent = (WrappedComponents) => {
    return function ({text, ...restProps}) {
        const upperCaseText = text.toUpperCase();
        return <WrappedComponents text={upperCaseText} {...restProps} />
    }
}
const MyComponent = ({text}) => <div>{text}</div>;

const MyComponentWithUpperCase =  HigherOrderComponent(MyComponent);


export default MyComponentWithUpperCase;
