import { IParallax } from "@react-spring/parallax";
import { ReactNode } from "react";

export interface IViewDetectAnimationProp {
  direction: string,
  children: ReactNode | ReactNode[],
  styles: string,
  speed: number,
  level: number,
  to: number,
  repeat: boolean,
}

export interface IBannerProp {
 

  customCssPicInner: string | undefined ,
  customCssPicOuter: string | undefined ,
  backgroundImageName: string,
  headerOn:ReactNode| null ,
  children: ReactNode | ReactNode[],

}
export interface IMyDivProp {


  picOpp:boolean
  customCssPicInner: string | undefined ,
  customCssPicOuter: string | undefined ,
  backgroundImageName: string,
  children: ReactNode | ReactNode[],
  customPicCss: string | undefined 

}

export interface ICountUp {
  end: number,
  duration: number
}

export interface IMyContext {
  subHead: number,
  setSubHead: (subHead: number) => void
}

export interface IScrollButtonProp {
  to: number,
  page?: React.MutableRefObject<IParallax> | null
  parallaxEffect: boolean,
  target?: React.RefObject<HTMLDivElement> | null,
  customCss: string | null
}

export interface IFeatureCardsProp {
  absolutePosition: boolean
}

export interface IPortfolioPage {
  reff: React.MutableRefObject<IParallax>
  location: {
    location: string,
    status: string,
    flag: string
  },
  offset: number,
  image: string
}
