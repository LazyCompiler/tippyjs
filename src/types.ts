import * as Popper from '@popperjs/core';

export type BasePlacement = Popper.BasePlacement;

export type Placement = Popper.Placement;

export type Content =
  | string
  | Element
  | DocumentFragment
  | ((ref: Element) => string | Element | DocumentFragment);

export type SingleTarget = Element;

export type MultipleTargets = string | Element[] | NodeList;

export type Targets = SingleTarget | MultipleTargets;

export interface ReferenceElement<TProps = Props> extends Element {
  _tippy?: Instance<TProps>;
}

export interface PopperElement<TProps = Props> extends HTMLDivElement {
  _tippy?: Instance<TProps>;
}

export interface LifecycleHooks<TProps = Props> {
  onAfterUpdate(
    instance: Instance<TProps>,
    partialProps: Partial<TProps>
  ): void;
  onBeforeUpdate(
    instance: Instance<TProps>,
    partialProps: Partial<TProps>
  ): void;
  onCreate(instance: Instance<TProps>): void;
  onDestroy(instance: Instance<TProps>): void;
  onHidden(instance: Instance<TProps>): void;
  onHide(instance: Instance<TProps>): void | false;
  onMount(instance: Instance<TProps>): void;
  onShow(instance: Instance<TProps>): void | false;
  onShown(instance: Instance<TProps>): void;
  onTrigger(instance: Instance<TProps>, event: Event): void;
  onUntrigger(instance: Instance<TProps>, event: Event): void;
  onClickOutside(instance: Instance<TProps>, event: Event): void;
}

export interface RenderProps {
  allowHTML: boolean;
  arrow: boolean | string | SVGElement | DocumentFragment;
  content: Content;
  duration: number | [number | null, number | null];
  maxWidth: number | string;
  theme: string;
  zIndex: number;
}

export interface GetReferenceClientRect {
  (): ClientRect | DOMRect;
  contextElement?: Element;
}

interface PluginProps {
  animateFill: boolean;
  animation:
    | string
    | boolean
    | {
        show: (instance: Instance) => void;
        hide: (instance: Instance) => void;
      };
  aria: {
    content?: 'auto' | 'describedby' | 'labelledby' | null;
    expanded?: 'auto' | boolean;
    role?: string;
  };
  followCursor: boolean | 'horizontal' | 'vertical' | 'initial';
  inlinePositioning: boolean;
  sticky: boolean | 'reference' | 'popper';
}

export interface Props extends LifecycleHooks, RenderProps, PluginProps {
  appendTo: 'parent' | Element | ((ref: Element) => Element);
  delay: number | [number | null, number | null];
  getReferenceClientRect: null | GetReferenceClientRect;
  hideOnClick: boolean | 'toggle';
  ignoreAttributes: boolean;
  interactive: boolean;
  interactiveBorder: number;
  interactiveDebounce: number;
  moveTransition: string;
  offset:
    | [number, number]
    | (({
        placement,
        popper,
        reference,
      }: {
        placement: Placement;
        popper: Popper.Rect;
        reference: Popper.Rect;
      }) => [number, number]);
  placement: Placement;
  plugins: Plugin<unknown>[];
  popperOptions: Partial<Popper.Options>;
  render:
    | ((
        props: Props
      ) => {
        popper: PopperElement;
        onUpdate?: (prevProps: Props, nextProps: Props) => void;
      })
    | null;
  showOnCreate: boolean;
  touch: boolean | 'hold' | ['hold', number];
  trigger: string;
  triggerTarget: Element | Element[] | null;
}

export interface DefaultProps extends Omit<Props, 'delay'> {
  delay: number | [number, number];
}

export interface Instance<TProps = Props> {
  clearDelayTimeouts(): void;
  destroy(): void;
  disable(): void;
  enable(): void;
  hide(): void;
  hideWithInteractivity(event: MouseEvent): void;
  id: number;
  plugins: Plugin<TProps>[];
  popper: PopperElement<TProps>;
  popperInstance: Popper.Instance | null;
  props: TProps;
  reference: ReferenceElement<TProps>;
  setContent(content: Content): void;
  setProps(partialProps: Partial<TProps>): void;
  show(): void;
  state: {
    isEnabled: boolean;
    isVisible: boolean;
    isDestroyed: boolean;
    isMounted: boolean;
    isShown: boolean;
    currentTarget: Element | null;
  };
  unmount(): void;
}

export interface TippyStatics {
  readonly currentInput: {isTouch: boolean};
  readonly defaultProps: DefaultProps;
  setDefaultProps(partialProps: Partial<DefaultProps>): void;
}

export interface Tippy<TProps = Props> extends TippyStatics {
  (targets: SingleTarget, optionalProps?: Partial<TProps>): Instance<TProps>;
}

export interface Tippy<TProps = Props> extends TippyStatics {
  (targets: MultipleTargets, optionalProps?: Partial<TProps>): Instance<
    TProps
  >[];
}

declare const tippy: Tippy;

// =============================================================================
// Addon types
// =============================================================================
export interface DelegateInstance<TProps = Props> extends Instance<TProps> {
  destroy(shouldDestroyTargetInstances?: boolean): void;
}

export interface Delegate<TProps = Props> {
  (
    targets: SingleTarget,
    props: Partial<TProps> & {target: string}
  ): DelegateInstance<TProps>;
}

export interface Delegate<TProps = Props> {
  (
    targets: MultipleTargets,
    props: Partial<TProps> & {target: string}
  ): DelegateInstance<TProps>[];
}

export type CreateSingletonProps<TProps = Props> = TProps & {
  overrides: Array<keyof TProps>;
};

export type CreateSingletonInstance<TProps = CreateSingletonProps> = Instance<
  TProps
> & {
  setInstances(instances: Instance<any>[]): void;
  show(target?: ReferenceElement | Instance | number): void;
  showNext(): void;
  showPrevious(): void;
};

export type CreateSingleton<TProps = Props> = (
  tippyInstances: Instance<any>[],
  optionalProps?: Partial<CreateSingletonProps<TProps>>
) => CreateSingletonInstance<CreateSingletonProps<TProps>>;

declare const delegate: Delegate;
declare const createSingleton: CreateSingleton;

// =============================================================================
// Plugin types
// =============================================================================
export interface Plugin<TProps = Props> {
  name?: string;
  defaultValue?: any;
  fn(instance: Instance<TProps>): Partial<LifecycleHooks<TProps>>;
}

export interface AnimateFill extends Plugin {
  name: 'animateFill';
  defaultValue: false;
}

export interface FollowCursor extends Plugin {
  name: 'followCursor';
  defaultValue: false;
}

export interface InlinePositioning extends Plugin {
  name: 'inlinePositioning';
  defaultValue: false;
}

export interface Sticky extends Plugin {
  name: 'sticky';
  defaultValue: false;
}

declare const animateFill: AnimateFill;
declare const followCursor: FollowCursor;
declare const inlinePositioning: InlinePositioning;
declare const sticky: Sticky;

// =============================================================================
// Misc types
// =============================================================================
export interface HideAllOptions {
  duration?: number;
  exclude?: Instance | ReferenceElement;
}

export type HideAll = (options?: HideAllOptions) => void;

declare const hideAll: HideAll;
declare const roundArrow: string;

export default tippy;
export {
  hideAll,
  delegate,
  createSingleton,
  animateFill,
  followCursor,
  inlinePositioning,
  sticky,
  roundArrow,
};
