import type {
  DefineComponent,
  ComputedOptions,
  MethodOptions,
  ComponentOptionsMixin,
  EmitsOptions,
  ExtractPropTypes,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps,
} from "vue3";

type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;
type _AnyRecord = Record<string, any>;
type _Component<P extends _AnyRecord = _AnyRecord> = DefineComponent<
  {},
  {},
  {},
  ComputedOptions,
  MethodOptions,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  EmitsOptions,
  string,
  PublicProps,
  Readonly<ExtractPropTypes<P>>
>;

export type { _Component as Component };
