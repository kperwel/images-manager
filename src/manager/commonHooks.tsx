import { useRouteMatch } from "react-router-dom";

export function useSelectedId() {
  const match = useRouteMatch<{ imageId: string }>();
  return match ? match.params.imageId : null;
}
