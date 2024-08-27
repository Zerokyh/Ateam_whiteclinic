import { sizes } from "@/styles/sizes";
import RCheckbox, { CheckboxProps } from "../atom/RCheckbox";
import RIcon, { IconProps } from "../atom/RIcon";
import RText, { TextProps } from "../atom/RText";

type ControlGroup = 'RCheckbox' | 'RIcon';

type ControlGroupPropsMap = {
  RCheckbox: CheckboxProps;
  RIcon: IconProps;
  text: never;
};

// BaseProps는 모든 경우에 공통으로 사용할 수 있는 props를 정의
type BaseProps = {
  textprops?: TextProps;
  size?: keyof typeof sizes.fontSize;
};

// ControlGroup과 해당하는 props를 함께 정의
type TextualControlGroupProps<T extends ControlGroup> = BaseProps & {
  component: T;
  controlprops: ControlGroupPropsMap[T];
};

// Component 매핑
const componentMap = {
  RCheckbox,
  RIcon,
};

const TextualControlGroup = <T extends ControlGroup>({
  component,
  controlprops,
  textprops,
}: TextualControlGroupProps<T>) => {
  const Component = componentMap[component] as React.ComponentType<ControlGroupPropsMap[T]>;

  return (
    <div className="flex items-center gap-2">
      <Component {...controlprops} />
      {textprops?.text && <RText {...textprops} />}
    </div>
  );
};

export default TextualControlGroup;
