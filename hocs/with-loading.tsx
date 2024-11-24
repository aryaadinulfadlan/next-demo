import LoaderAnimation from "@/components/loader-animation";

interface Props {
  isLoading: boolean;
}

export default function WithLoading(Component: () => React.JSX.Element) {
  return ({ isLoading }: Props) => {
    if (isLoading) return <LoaderAnimation />;
    return <Component />;
  };
}
