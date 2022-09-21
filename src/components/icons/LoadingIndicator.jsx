import SpinnerSVG from "@/assets/spinner.svg";

export default function LoadingIndicator() {
  return <img src={SpinnerSVG} className="w-20" alt="Loading" />;
}
