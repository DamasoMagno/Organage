import { Skeleton } from "./styles"

export function Loader() {
  return (
    <div>
      <Skeleton className="skeleton"/>
      <Skeleton className="skeleton"/>
    </div>
  )
}