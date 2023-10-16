import React from "react"
import ContentLoader from "react-content-loader"

type SkeletonProps = {
  key: number;
}

const Skeleton: React.FC<SkeletonProps> = ({key}) => (
  <ContentLoader 
    speed={2}
    width={279}
    height={492}
    viewBox="0 0 279 492"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    key={key}
  >
    <rect x="22" y="33" rx="0" ry="0" width="251" height="207" /> 
    <rect x="22" y="276" rx="0" ry="0" width="247" height="35" /> 
    <rect x="23" y="401" rx="0" ry="0" width="99" height="35" /> 
    <rect x="164" y="401" rx="0" ry="0" width="104" height="34" /> 
    <rect x="23" y="336" rx="0" ry="0" width="246" height="39" /> 
    <rect x="412" y="-13" rx="0" ry="0" width="256" height="417" />
  </ContentLoader>
)

export default Skeleton